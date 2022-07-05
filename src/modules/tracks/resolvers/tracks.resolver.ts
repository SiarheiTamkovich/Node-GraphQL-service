import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GenresService } from 'service';
import { ArtistsService } from 'service';
import { TracksService } from 'service';


export class TrackResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly artistService: ArtistsService,
    private readonly genresService: GenresService,
  ) {}

  @Query()
  async track(@Args('id') id: string) {
    return this.tracksService.findOneById(id);
  }

  @Query()
  async tracks() {
    return this.tracksService.findAll();
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() track) {
    const { bandsIds } = track;
    // eslint-disable-next-line prettier/prettier
    return await Promise.all(bandsIds.map(id => {
      return this.bandsService.findOneById(id);
    }));
  };


  @Resolver() 
  @ResolveField()
  async genres(@Parent() track) {
    const { genresIds } = track;
    return await Promise.all(genresIds.map(id => {
      return this.genreService.findOneById(id);
    }))
  }

}
