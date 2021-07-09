import angular from 'angular';

import {IQService, IHttpService} from 'angular';

import {
    HttpEndpointFactory,
    HttpEndpointFactoryHooksMap
} from '@ef-class/util';

import {NgHttpAdaptor} from './adaptor/NgHttpAdaptor';



export default angular.module('ctx.http', [])

.provider('ctxHttpEndpointFactory', [
    () => {

        let hookMap: HttpEndpointFactoryHooksMap;

        function setHookMap(arg: HttpEndpointFactoryHooksMap): void {

            hookMap = arg;
        }

        return {
            setHookMap: setHookMap,
            $get: [
                '$q',
                '$http',
                ($q: IQService, $http: IHttpService): HttpEndpointFactory => {

                    return new HttpEndpointFactory({
                        adaptor: new NgHttpAdaptor($q, $http),
                        hooks: hookMap
                    });
                }
            ]
        };
    }
]);
