import { Injectable } from '@angular/core';
import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interfaces/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }

  private courses$ = new BehaviorSubject<Course[]>([]);
  get course(){
    return this.courses$.asObservable();
  }

  
  getCourses() : Course[] {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    if (data) {
      const courses = JSON.parse(data);
      this.upDatecourses(courses);
      return courses;
    }
    return [];
  }
  addcourse(data: Course) {
    const courses = this.courses$.value;
    const newcourses = [...courses, { ...data, id: courses.length + 1 }];
    this.upDatecourses(newcourses); // Update UI
    this.setItem(newcourses); // Save to localStorage
  }
  
  upDatecourses(data : Course[]){
      this.courses$.next(data);
  }
  
   deleteCourse(course: any) {
      let courses : Course[]=this.courses$.value;
      courses = courses.filter(item => item.id !== course.id);
      this.upDatecourses(courses);
      this.setItem(courses);
    }

  setItem(data: Course[]) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  }

}
