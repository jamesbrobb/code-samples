import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule, Optional } from '@angular/core';
import {
    HttpEndpointFactory,
    HttpEndpointFactoryHooksMap,
    HttpEndpointsConfig as EndpointsConfig,
    HttpEndpointsRepository
} from '@ef-class/util';
import { NgHttpAdaptor } from './adaptor/http-adaptor';

export const HttpEndpointFactoryHooksMapService = new InjectionToken<HttpEndpointFactoryHooksMap>('HttpEndpointFactoryHooksMapConfig');
export const HttpEndpointsConfig = new InjectionToken<EndpointsConfig>('HttpEndpointsConfig');

export class ProvidersFactory {

    public static createHttpEndpointsRepository(
        httpClient: HttpClient,
        config: EndpointsConfig,
        hooks: HttpEndpointFactoryHooksMap
    ): HttpEndpointsRepository {

        const adaptor = new NgHttpAdaptor(httpClient);
        const factory = new HttpEndpointFactory({ config, adaptor, hooks });
        const repository = new HttpEndpointsRepository();

        Object.keys(config).forEach( key => {
            repository.addItem(key, factory.createByType(key));
        });

        return repository;
    }
}


@NgModule({
    imports: [ HttpClientModule ],
    providers: [
        {
            provide: HttpEndpointsRepository,
            useFactory: ProvidersFactory.createHttpEndpointsRepository,
            deps: [
                HttpClient,
                HttpEndpointsConfig,
                [new Optional(), HttpEndpointFactoryHooksMapService]
            ]
        }
    ]
})
export class HttpModule {}
