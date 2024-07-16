import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {environment} from "../../environments/environment";
import {GraphQLModule} from "@nestjs/graphql";
import {AppResolver} from "./app.resolver";
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...environment.connection as TypeOrmModuleOptions
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>(
            {
                driver: ApolloDriver,
                typePaths: ["./**/*.graphql"],
                context: ({req}) => ({req}),
                playground: true,
            }
        ),],
    controllers: [AppController],
    providers: [AppResolver]
})
export class AppModule {
}
