import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CoursesComponent } from "../courses/courses.component";
import { Strings } from '../../enum/strings.enum';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone :true,
  imports: [CoursesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  courses : any[]=[];
  
  // title= "standAlone "
  // val: number=4;
  // private router= inject(Router);
  // // constructor(private router : Router){
  // // }
  // navigate(){
  //   this.router.navigate(['/about']);
  // }

      ngOnInit(){
        // this.getcourses();
      }
      
      // getcourses(){
      //         const data =localStorage.getItem(Strings.STORAGE_KEY);
      //         console.log(data);
      //         if(data){
      //           this.courses=JSON.parse(data);
      //         }
      
      //       }
    
}
