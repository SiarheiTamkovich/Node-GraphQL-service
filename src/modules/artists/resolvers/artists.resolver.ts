import { Args, Query } from '@nestjs/graphql';
import { ArtistsService } from '../../artists/services/artists.service';

export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Query()
  async artists() {
    return this.artistsService.findAll();
  }

  @Query()
  async artist(@Args('id') id: string) {
    return this.artistsService.findById(id);
  }
}
