import {
    IHttpService,
    IQService,
    IDeferred,
    IRequestConfig,
    IPromise,
    IHttpPromiseCallbackArg
} from 'angular';

import {Observable, Observer, throwError} from 'rxjs';

import {
    HttpAdaptor,
    HttpRequest,
    HttpResponse,
    HttpError
} from '@ef-class/util';



export class NgHttpAdaptor implements HttpAdaptor {

    private _http: IHttpService;
    private _q: IQService;


    constructor(q: IQService, http: IHttpService) {

        this._q = q;
        this._http = http;
    }

    public request(request: HttpRequest): Observable<HttpResponse|HttpError> {

        return new Observable<HttpResponse>((observer: Observer<HttpResponse>) => this._handler(request, observer));
    }

    private _handler(request: HttpRequest, observer: Observer<HttpResponse>): Function {

        let timeout: IDeferred<any> = this._q.defer();

        const config: IRequestConfig = this._convertRequest(request, timeout.promise);

        this._http(config)
            .then((response: IHttpPromiseCallbackArg<any>) => {

                timeout = null;

                observer.next(this._convertResponse(response, request));
                observer.complete();
            })
            .catch((error: IHttpPromiseCallbackArg<any>) => {

                timeout = null;

                if (observer.closed) {
                    return;
                }

                observer.error(this._convertResponse(error, request));

                return throwError(error);
            });

        return () => {

            if (!timeout) {
                return;
            }

            timeout.resolve();
        };
    }

    private _convertRequest(request: HttpRequest, timeout: IPromise<any>): IRequestConfig {

        return {
            url: request.url,
            method: request.method,
            params: request.search,
            data: request.data,
            headers: request.headers ? request.headers.toObject() : {},
            withCredentials: !!request.withCredentials,
            cache: !!request.cache,
            timeout: timeout
        };
    }

    private _convertResponse(response: IHttpPromiseCallbackArg<any>, request: HttpRequest): HttpResponse {

        return {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers, // @todo need to normalise this - create response headers interface?
            data: response.data,
            request: request
        };
    }
}
