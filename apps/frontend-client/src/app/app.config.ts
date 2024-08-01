import {
	ApplicationConfig,
	enableProdMode,
	provideZoneChangeDetection
} from '@angular/core'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app.routes'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideStore } from '@ngrx/store'
import { provideHttpClient, withFetch } from '@angular/common/http'
import { ngrxDevtools } from '../devtools/ngrx-devtools'
import { environment } from '../environments/environment'
import { ngrxDevtoolsDevelopment } from '../devtools/ngrx-devtools.development'

export const commonProviders = [
	provideStore(),
	provideRouter(appRoutes),
	provideAnimationsAsync(),
	provideHttpClient(withFetch())
]

if (environment.production) {
	enableProdMode()
}

export const appConfig: ApplicationConfig = {
	providers: [
		...commonProviders,
		provideZoneChangeDetection({eventCoalescing: true}),
		environment.production ? ngrxDevtools : ngrxDevtoolsDevelopment
	]
}
