import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { User } from '../../infra/typeorm/entities/User';
import { UserService } from '../../services/UserService';

@Injectable()
@ValidatorConstraint()
export class IsUniqueTaxIdConstraint implements ValidatorConstraintInterface {
  constructor(protected readonly userService: UserService) {}

  validate(taxId: string): boolean | Promise<boolean> {
    const isUniqueTaxId = this.userService.getByTaxId(taxId);
    return isUniqueTaxId ? false : true;
  }
}

export function IsTaxIdUnique(validationOpts?: ValidationOptions) {
  return function (object: User, propertyName: any) {
    registerDecorator({
      target: object.constructor, // construct of User class
      propertyName: propertyName, // property of User class which will be validated
      options: validationOpts, // message of error declared into User class
      constraints: [],
      validator: IsUniqueTaxIdConstraint, // fn or class/interface which should process validation
    });
  };
}
