import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private CoursesService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.CoursesService.getCourses();
    return courses;
  }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId) {
    const course = await this.CoursesService.getCourse(courseId);
    return course;
  }

  @Post()
  async addCourse(@Body() CreateCourseDto: CreateCourseDto) {
    const course = this.CoursesService.addCourse(CreateCourseDto);
    return course;
  }

  @Delete()
  async deleteCourse(@Query() query) {
    const courses = await this.CoursesService.deleteCourse(query.courseId);
    return courses;
  }
}
