import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContextModel } from 'src/common/models/context.model';
import { CreateBandData, UpdateBandData } from 'src/graphql.schema';
import { BandsService } from '../../bands/services/bands.service';

@Resolver('Band')
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

  @Mutation('createArtist')
  async create(
    @Args('createArtistData') args: CreateBandData,
    @Context() context: ContextModel,
  ) {
    const jwtToken = context.req.headers.authorization;
    const response = await this.bandsService.createBands(args, jwtToken);
    const newBands = { ...response };
    newBands['id'] = newBands['_id'];
    delete newBands['_id'];
    return newBands;
  }

  @Mutation('deleteBand')
  async delete(@Args('id') id: string, @Context() context: ContextModel) {
    const jwtToken = context.req.headers.authorization;
    this.bandsService.deleteBands(id, jwtToken);
  }

  @Mutation('updateBand')
  async update(
    @Args('updateArtistData') args: UpdateBandData,
    @Context() context: ContextModel,
  ) {
    const jwtToken = context.req.headers.authorization;
    return await this.bandsService.updateBand(args.id, args, jwtToken);
  }

  @Query('artists')
  async artists() {
    return this.bandsService.findAll();
  }

  @Query('artist')
  async artist(@Args('id') id: string) {
    return this.bandsService.findOneById(id);
  }
}
