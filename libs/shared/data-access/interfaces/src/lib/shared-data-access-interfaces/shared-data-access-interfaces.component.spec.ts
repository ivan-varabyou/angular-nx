import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedDataAccessInterfacesComponent} from './shared-data-access-interfaces.component';

describe('SharedDataAccessInterfacesComponent', () => {
    let component: SharedDataAccessInterfacesComponent;
    let fixture: ComponentFixture<SharedDataAccessInterfacesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedDataAccessInterfacesComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SharedDataAccessInterfacesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
