import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/coomen/util/enums/user.enum';

export const Role = (...args: UserRole[]) => SetMetadata('role', args);
