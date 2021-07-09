import * as bowser from 'bowser';
import {InjectionToken, NgModule} from '@angular/core';
import {BrowserCompatConfig, BrowserCompatibility, ResolutionCheck, ResolutionConfig, CompatibilityService} from '@ef-class/util';



export const BrowserCompatibilityConfigService = new InjectionToken<BrowserCompatConfig>('BrowserCompatibilityConfigService');
export const ResolutionConfigService = new InjectionToken<ResolutionConfig>('ResolutionConfigService');


export function compatibilityServiceFactory(browserCompatConfig: BrowserCompatConfig, resolutionConfig: ResolutionConfig) {
    return new CompatibilityService([
        new BrowserCompatibility(bowser, browserCompatConfig),
        new ResolutionCheck(window.screen, resolutionConfig)
    ]);
}


@NgModule({
    providers: [
        {
            provide: CompatibilityService,
            useFactory: compatibilityServiceFactory,
            deps: [
                BrowserCompatibilityConfigService,
                ResolutionConfigService
            ]
        }
    ]
})
export class CompatibilityModule {}
