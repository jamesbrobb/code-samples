import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorOverlayComponent, OVERLAY_COLORS} from './color-overlay.component';
import {By} from '@angular/platform-browser';


describe('ColorOverlayComponent', () => {

    let component: ColorOverlayComponent;
    let fixture: ComponentFixture<ColorOverlayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ColorOverlayComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorOverlayComponent);
        component = fixture.componentInstance;
        component.ngOnChanges();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should default to blue', () => {
        const element = fixture.debugElement.query(By.css('.ef-class-color-overlay.blue')).nativeElement;
        expect(element).toBeTruthy();
    });

    it('should add supplied color as class', () => {

        let element = fixture.debugElement.query(By.css('.ef-class-color-overlay.blue')).nativeElement;

        expect(element).toBeTruthy();

        component.color = OVERLAY_COLORS.GREEN;
        component.ngOnChanges();

        fixture.detectChanges();

        element = fixture.debugElement.query(By.css('.ef-class-color-overlay.green')).nativeElement;

        expect(element).toBeTruthy();
    });

    it('should add allow transition by default', () => {
        const element = fixture.debugElement.query(By.css('.ef-class-color-overlay.allow-transition')).nativeElement;
        expect(element).toBeTruthy();
    });

    it('should remove allow transition when set to false', () => {

        component.ioAllowTransition = false;
        component.ngOnChanges();

        fixture.detectChanges();

        const element = fixture.debugElement.query(By.css('.ef-class-color-overlay.allow-transition'));
        expect(element).toBeFalsy();
    });
});
