import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FrontendClientUiLayoutComponent} from './frontend-client-ui-layout.component';

describe('FrontendClientUiLayoutComponent', () => {
    let component: FrontendClientUiLayoutComponent;
    let fixture: ComponentFixture<FrontendClientUiLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendClientUiLayoutComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendClientUiLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
