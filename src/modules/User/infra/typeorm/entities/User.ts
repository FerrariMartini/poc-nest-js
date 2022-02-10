import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { IsTaxIdUnique } from '../../../util/CustomUserValidation/IsTaxIdUnique.validator';

export class User {
  id: string;

  @IsTaxIdUnique({
    message:
      'This data has already used. You should try to recover your user and password',
  })
  @IsNotEmpty({
    message: 'Tax Id is required.',
  })
  @IsString({
    message: 'Tax Id must be a string.',
  })
  taxId: string;

  @IsNotEmpty({
    message: 'First name is required.',
  })
  @IsString({
    message: 'First name must have only words.',
  })
  firstName: string;

  @IsNotEmpty({
    message: 'Last name is required.',
  })
  lastName: string;

  @IsEmail(
    {},
    {
      message: 'Email needs to be valid.',
    },
  )
  email: string;

  @IsNotEmpty({
    message: 'Password is required.',
  })
  password: string;

  createdAt: Date;
  updatedAt: Date;
}
