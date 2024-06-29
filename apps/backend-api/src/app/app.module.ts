import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {environment} from "../../environments/environment";


@Module({
  imports: [TypeOrmModule.forRoot({
    ...environment.connection as TypeOrmModuleOptions
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
