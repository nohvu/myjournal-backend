import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from 'src/auth/validations/UniqueValidation';
import { UserEntity } from '../entities/user.entity';
export class CreateUserDto {
  @Length(2)
  fullName: string;

  @IsEmail(undefined, { message: 'Неверный формат почты' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Данный почтовый ящик уже используется',
  })
  email: string;

  @Length(6, 16, { message: 'Пароль не менее 6 символов' })
  password?: string;
}
