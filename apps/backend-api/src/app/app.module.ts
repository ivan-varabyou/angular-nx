import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {environment} from "../../environments/environment";
import {GraphQLModule} from "@nestjs/graphql";
import {resolverMap} from "./app.resolver";
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {UserEntitiy} from "./users/entities/user.entitiy";
import {UsersModule} from "./users/users.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...environment.connection,
            entities: [UserEntitiy]
        } as TypeOrmModuleOptions),
        GraphQLModule.forRoot<ApolloDriverConfig>(
            {
                driver: ApolloDriver,
                typePaths: ["./**/*.graphql"],
                context: ({req}) => ({req}),
                playground: true,
                resolvers: [resolverMap]
            }
        ),
        UsersModule
    ],
    controllers: [AppController],

})
export class AppModule {
}
