import { ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideServerRendering } from '@angular/platform-server'
import { appConfig } from './app.config'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app.routes'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import {
	provideClientHydration,
	withEventReplay
} from '@angular/platform-browser'
import { provideHttpClient, withFetch } from '@angular/common/http'

const serverConfig: ApplicationConfig = {
	providers: [
		provideServerRendering(),
		provideRouter(appRoutes),
		provideAnimationsAsync(),
		provideHttpClient(withFetch()),
		provideClientHydration(
			withEventReplay()
		)
	]
}

export const config = mergeApplicationConfig(appConfig, serverConfig)
