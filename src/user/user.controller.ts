import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthGuard } from 'src/shared/guard/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(AuthGuard)
  @Get('/profile')
  getUserProfile(@Request() req, @Response() res) {
    console.log('this is printing', req.user);
    const currentUser = req.user;
    return res.json(currentUser);
  }
}
