import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    const newUser = new UserEntity({
      id: crypto.randomUUID(),
      email: createUserDto.email,
      name: createUserDto.name,
      phone: createUserDto.phone,
      project_type: createUserDto.project_type,
      project_description: createUserDto.project_description,
      budget_min: createUserDto.budget_min || 0,
      budget_max: createUserDto.budget_max || 0,
    });
    return newUser;
  }
}
