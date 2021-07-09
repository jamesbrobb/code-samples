import {IQService, IPromise, IDeferred} from 'angular';

import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {
    HttpEndpoint,
    HttpResponse,
    HttpRequestOptions,
    HttpError
} from '@ef-class/util';



export class NgHttpEndpoint {

    private _q: IQService;
    private _endpoint: HttpEndpoint;


    constructor(q: IQService, endpoint: HttpEndpoint) {

        this._q = q;
        this._endpoint = endpoint;
    }

    public request(methodId: string, params?: {[key: string]: any}, options?: HttpRequestOptions): IPromise<HttpResponse|HttpError> {

        const defer: IDeferred<HttpResponse|HttpError> = this._q.defer();

        this._endpoint.request(methodId, params, options)
            .pipe(catchError((error: HttpError) => {
                defer.reject(error);
                return throwError(error);
            }))
            .subscribe((response: HttpResponse) => {
                defer.resolve(response);
            });

        return defer.promise;
    }
}
