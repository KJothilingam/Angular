import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  // @Input() courses :any;
  // @Input() isDelete = false;
  @Input() isAdmin = false;
  // @Output() Del = new EventEmitter;
  courses : Course[]=[];  
  coursesub !: Subscription;

  private courseservies=inject(CourseService)
  // constructor( private courseservices : CourseService){}

  ngOnInit(){
    // this.getCourses();
    this.coursesub=this.courseservies.course.subscribe({
      next: (courses1) => {
        this.courses = courses1;
        console.log("Courses updated:", this.courses);
      },
      error: (e) => {
        console.log("Error fetching courses:", e);
      }
    });
  
    this.courses = this.courseservies.getCourses();
  }
    // getCourses() {
    //   const data = localStorage.getItem(Strings.STORAGE_KEY);
    //   if (data) {
    //     this.courses = JSON.parse(data);
    //   }
    // }
  
  Deletecourse(course :any){
    // this.Del.emit(course);
    this.courseservies.deleteCourse(course);
    this.courses = this.courseservies.getCourses(); 
  }


  ngOnDestroy(){
    console.log('courses On Destroyed'); 
    if(this.coursesub) this.coursesub.unsubscribe();
  }
}
