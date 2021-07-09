import { TestBed } from '@angular/core/testing';
import { HttpEndpointsConfig, HttpModule } from './http.module';
import { HttpEndpoint, HttpEndpointsRepository } from '@ef-class/util';

describe('HttpModule', () => {

    let repository: HttpEndpointsRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [{
                provide: Service,
                useFactory: ServiceFactory.create,
                deps: [ HttpEndpointsRepository ]
            }, {
                provide: HttpEndpointsConfig,
                useValue: {
                    'foo': {
                        'baseUrl': 'https://foo',
                        'methods': {
                            'search': {
                                'type': 'POST',
                                'url': '/bar/baz'
                            },
                        }
                    },
                }
            }]
        });

        const service: Service = TestBed.get(Service);
        repository = service.repo;
    });

    describe('WHEN configuration for the endpoints is provided', () => {

        describe('HttpEndpointsRepository', () => {

            it('provides the HttpEndpoints configured', () => {
                expect(repository.get('foo') instanceof HttpEndpoint).toBeTruthy();
            });
        });
    });

});

export class ServiceFactory {

    public static create( httpEndpointRepository: HttpEndpointsRepository ): Service {
        return new  Service(httpEndpointRepository);
    }
}

export class Service {

    public repo: HttpEndpointsRepository;

    constructor( httpEndpointRepository: HttpEndpointsRepository ) {
        this.repo = httpEndpointRepository;
    }
}
