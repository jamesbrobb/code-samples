import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {By} from '@angular/platform-browser';

import {ResponsiveContainerMockDirective} from '../../../index.mock';
import {PageHeaderComponent} from './page-header.component';
import {EfClassOverlayComponentsModule} from '../../../common/overlay/ef-class-overlay-components.module';
import {EfClassImageModule} from '../../../media/image/ef-class-image.module';
import {ResponsiveContainerDirective} from '../../../responsive/container/responsive-container.directive';
import {EfClassResponsiveComponentsModule} from '../../../responsive/ef-class-responsive-components.module';



describe('PageHeaderComponent', () => {

    let component: PageHeaderComponent,
        fixture: ComponentFixture<PageHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                EfClassImageModule,
                EfClassOverlayComponentsModule,
                EfClassResponsiveComponentsModule
            ],
            declarations: [
                PageHeaderComponent
            ]
        })
        .overrideModule(EfClassResponsiveComponentsModule, {
            remove: {
                declarations: [ResponsiveContainerDirective],
                exports: [ResponsiveContainerDirective]
            },
            add: {
                declarations: [ResponsiveContainerMockDirective],
                exports: [ResponsiveContainerMockDirective]
            }
        })
        .compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(PageHeaderComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should render the component', () => {
        expect(component).toBeDefined();
    });

    it('should display the supplied title', () => {

        const titleText = 'Title';

        component.title = titleText;

        fixture.detectChanges();

        const titleElement = fixture.debugElement.query(By.css('.title')).nativeElement;

        expect(titleElement.textContent).toEqual(titleText);
    });
});
