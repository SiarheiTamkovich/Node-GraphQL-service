import { Module } from '@nestjs/common';
import { BandsService } from './services/bands.service';
import { BandsResolver } from './resolvers/bands.resolver';

@Module({
  imports: [],
  providers: [BandsService, BandsResolver],
  exports: [BandsService],
})
export class BandsModule {}
