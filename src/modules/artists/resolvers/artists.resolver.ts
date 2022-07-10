import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContextModel } from 'src/common/models/context.model';
import { CreateArtistData, UpdateArtistData } from 'src/graphql.schema';
import { ArtistsService } from '../../artists/services/artists.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Mutation('createArtist')
  async create(
    @Args('createArtistData') args: CreateArtistData,
    @Context() context: ContextModel,
  ) {
    const jwtToken = context.req.headers.authorization;
    const response = await this.artistsService.createArtist(args, jwtToken);
    const newArtist = { ...response };
    newArtist['id'] = newArtist['_id'];
    delete newArtist['_id'];
    return newArtist;
  }

  @Mutation('deleteArtist')
  async delete(@Args('id') id: string, @Context() context: ContextModel) {
    const jwtToken = context.req.headers.authorization;
    this.artistsService.deleteArtist(id, jwtToken);
  }

  @Mutation('updateArtist')
  async update(
    @Args('updateArtistData') args: UpdateArtistData,
    @Context() context: ContextModel,
  ) {
    const jwtToken = context.req.headers.authorization;
    return await this.artistsService.updateArtist(args.id, args, jwtToken);
  }

  @Query('artists')
  async artists() {
    return this.artistsService.findAll();
  }

  @Query('artist')
  async artist(@Args('id') id: string) {
    return this.artistsService.findOneById(id);
  }
}
