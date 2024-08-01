import { ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideServerRendering } from '@angular/platform-server'
import { appConfig, commonProviders } from './app.config'
import {
	provideClientHydration,
	withEventReplay
} from '@angular/platform-browser'

const serverConfig: ApplicationConfig = {
	providers: [
		...commonProviders,
		provideServerRendering(),
		provideClientHydration(
			withEventReplay()
		)
	]
}

export const config = mergeApplicationConfig(appConfig, serverConfig)
