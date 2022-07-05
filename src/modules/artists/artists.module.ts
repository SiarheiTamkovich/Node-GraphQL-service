import { Module } from '@nestjs/common';
import { ArtistsService } from './services/artists.service';
import { ArttistResolver} from './resolvers';

@Module({
  imports: [],
  providers: [ArtistsService, ArttistResolver],
  exports: [ArtistsService],
})
export class ArtistModule {}
