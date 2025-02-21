import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone :true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private route =inject(ActivatedRoute);

  ngOnInit(){
   const id= this.route.snapshot.paramMap.get('id')
    console.log(id);

    this.route.params.subscribe({
      next : ( data )=>{
        console.log(data['id']);

      },
      error: (e : any )=>{
        console.log(e);
      }
    })


  }

}
