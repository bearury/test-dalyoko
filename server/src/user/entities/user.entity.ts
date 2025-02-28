import { CreateUserDto } from '../dto/create-user.dto';

export class UserEntity extends CreateUserDto {
  public readonly id: string;

  constructor(partial: UserEntity) {
    super();
    Object.assign(this, partial);
  }
}
