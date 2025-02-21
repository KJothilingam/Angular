import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';  
// import { Strings } from '../../enum/strings.enum';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-admin',
  standalone: true,  // Ensuring the component works properly
  imports: [FormsModule, NgIf, CoursesComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  model: any = {};
  cover: string | null = null;
  // courses: any[] = [];
  private courseservice =inject(CourseService);

  ngOnInit() {
    // this.getCourses();
  }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.cover = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid form');
      form.control.markAllAsTouched();
      return;
    }
    if (!this.cover) {
      console.log('Image is required!');
      return;
    }

    console.log('Form Submitted:', form.value);
    this.saveCourse(form.value);
    form.resetForm();
    this.cover = null;
  }

  async saveCourse(formValue: any) {
    try{
          const data: Course = {
            ...formValue,
            image: this.cover,
            // id: this.courses.length + 1,
          };
          await this.courseservice.addcourse(data);
            // this.courses = [...this.courses, data];
            // this.setItem(this.courses);
            // this.clearForm(data);
    }catch(e){
      console.log(e);
    }
  }

  // deleteCourse(course: any) {
  //   // this.courses = this.courses.filter(item => item.id !== course.id);
  //   // this.setItem(this.courses);
  // }

  // setItem(data: any) {
  //   localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  // }
}
