import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class User {
  id: string;

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
