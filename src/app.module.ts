import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { ArtistModule } from './modules/artists/artists.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    CatsModule,
    ArtistModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
