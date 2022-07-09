import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserData, User } from 'src/graphql.schema';
import { UsersService } from '../services/users.service';

@Resolver('User')
export class UsersResolver {
  constructor(public usersService: UsersService) {}

  @Query('jwt')
  async jwt(@Args('email') email: string, @Args('password') password: string) {
    const response = await this.usersService.getJWT(email, password);
    return response;
  }

  @Mutation('registerUser')
  async create(@Args('createUserData') args: CreateUserData) {
    const response = await this.usersService.register(args);
    const newUser = { ...response };
    newUser['id'] = newUser['_id'];
    delete newUser['_id'];
    return newUser;
  }
}
