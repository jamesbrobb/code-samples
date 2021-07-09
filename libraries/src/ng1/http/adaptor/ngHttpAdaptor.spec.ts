import {Observable, Subscription, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {
    HttpRequest,
    HttpResponse,
    HttpHeaders
} from '@ef-class/util';

import {NgHttpAdaptor} from './NgHttpAdaptor';




describe('NgHttpAdaptor', () => {

    const mockURI = '/mock',
        responseJson: {[key: string]: string} = {'data': 'mock'};

    let options: HttpRequest,
        adaptor: NgHttpAdaptor,
        $httpBackend;

    beforeEach(inject(($q, $http, _$httpBackend_) => {

        $httpBackend = _$httpBackend_;

        adaptor = new NgHttpAdaptor($q, $http);

        options = {
            method: 'get',
            url: mockURI
        };
    }));

    describe('request', () => {

        it('should return status 200 with responseJson as data', (done: Function) => {

            $httpBackend.expectGET(mockURI)
                .respond(responseJson);

            adaptor.request(options)
                .subscribe(
                    (response: any) => {
                        expect(response.status).toBe(200);
                        expect(response.data).toEqual(responseJson);
                        done();
                    }
                );

            $httpBackend.flush();
        });

        it('should return status 400 with errorJson on error', (done: Function) => {

            const errorJson: Object = {'error': true};

            $httpBackend.expectGET(mockURI)
                .respond(400, errorJson);

            adaptor.request(options)
                .pipe(catchError((error: any) => {
                    expect(error.status).toBe(400);
                    expect(error.data).toEqual(errorJson);
                    done();

                    return throwError(error);
                }))
                .subscribe();

            $httpBackend.flush();
        });

        it('should cancel the request on unsubscribe', () => {

            $httpBackend.expectGET(mockURI)
                .respond(responseJson);

            const observer: Observable<HttpResponse> = adaptor.request(options),
                subscription: Subscription = observer.subscribe();

            subscription.unsubscribe();

            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should set all supplied params on the request', () => {

            const data = {data: true},
                headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json;charset=utf-8'});

            options.method = 'POST';
            options.headers = headers;
            options.search = {param1: true};
            options.data = data;
            options.withCredentials = true;
            options.cache = true;

            $httpBackend.expectPOST(mockURI + '?param1=true', data, headers.toObject())
                .respond(responseJson);

            adaptor.request(options)
                .subscribe();

            $httpBackend.flush();
        });
    });
});
