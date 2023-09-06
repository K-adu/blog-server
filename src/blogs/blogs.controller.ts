import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { AuthGuard } from 'src/shared/guard/auth.guard';

import { CreateBlogDTO } from './dto/create-blog.dto';
import { BlogsService } from './blogs.service';
import { UpdateBlogDTO } from './dto/update-blog.dto';
import { query } from 'express';

@Controller('blogs')
// @UseInterceptors(ClassSerializerInterceptor)
export class BlogsController {
  constructor(private blogsService: BlogsService) {}
  // create
  @UseGuards(AuthGuard)
  @Post('/create')
  async createBlogController(@Body() body: CreateBlogDTO, @Request() req) {
    console.log('this is triggered');
    try {
      await this.blogsService.createBlogService(body, req);
    } catch {}
  }

  //update exiting blogs
  @UseGuards(AuthGuard)
  @Patch('/update/:id')
  async updateBlogController(
    @Body() body: UpdateBlogDTO,
    @Request() req,
    @Param('id') id: string,
  ) {
    return await this.blogsService.updateBlogService(body, req, id);
  }

  //delete a blog
  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  async deleteBlogController(@Request() req, @Param('id') id: string) {
    return await this.blogsService.deleteBlogService(req, id);
  }
  //get all blog of the logged in user
  @UseGuards(AuthGuard)
  @Get('/my')
  async getAllBlogsController(@Request() req) {
    return this.blogsService.getAllBlogsService(req.user.id);
  }

  //get public blogs of other users - for this need the user email,
  //needs email of the user
  @Get('/')
  async getOtherBlogsController() {
    const blog = await this.blogsService.getOtherBlogsService();
    console.log(blog);
    return blog;
  }

  //search matching blogs using keys
  @Get('/search')
  async searchBlogController(@Query() query) {
    return await this.blogsService.searchBlogController(query);
  }
}
