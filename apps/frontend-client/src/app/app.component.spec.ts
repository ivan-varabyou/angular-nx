import {TestBed} from '@angular/core/testing'
import {AppComponent} from './app.component'
import {RouterTestingModule} from '@angular/router/testing'

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent, RouterTestingModule]
        }).compileComponents()
    })

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const compiled = fixture.nativeElement as HTMLElement
        expect(compiled.querySelector('h1')?.textContent).toContain(
            'Welcome frontend-client'
        )
    })

    it(`should have as title 'frontend-client'`, () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app.title).toEqual('frontend-client')
    })
})
