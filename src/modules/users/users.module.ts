import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersResolver } from './resolvers/user.resolver';

@Module({
  imports: [],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
