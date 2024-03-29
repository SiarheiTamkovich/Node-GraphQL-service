import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { ArtistModule } from './modules/artists/artists.module';
import { UsersModule } from './modules/users/users.module';
import { BandsModule } from './modules/bands/bands.module';
import { GenresModule } from './modules/genres/genres.module';

@Module({
  imports: [
    ArtistModule,
    UsersModule,
    BandsModule,
    GenresModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
