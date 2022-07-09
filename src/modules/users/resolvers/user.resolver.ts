import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserData, User } from 'src/graphql.schema';
import { UsersService } from '../services/users.service';

@Resolver('User')
export class UsersResolver {
  constructor(public usersService: UsersService) {}

  @Query()
  async users() {
    //return this.usersService.findAll();
  }

  @Query()
  async user(@Args('id') id: string) {
    //return this.usersService.findById(id);
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
