import { Min } from 'class-validator';
import { User } from '../../../graphql.schema';

export class RegisterUserDto extends User {
  @Min(1)
  email: string;
}
