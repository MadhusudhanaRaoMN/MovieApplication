import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie} from '../../Models/movie-model'

@Component({
  selector: 'app-moview-details',
  templateUrl: './moview-details.component.html',
  styleUrls: ['./moview-details.component.css']
})
export class MoviewDetailsComponent implements OnInit {
  data : Movie
  id: any

   

  constructor(public router: Router, public route: ActivatedRoute) { }
 

  ngOnInit(): void {
    this.data = new Movie();
    this.route.queryParams.subscribe(params => {
    
      this.data.id = this.route.snapshot.paramMap.get('id');
      this.data.name = this.route.snapshot.paramMap.get('name');
      this.data.description = this.route.snapshot.paramMap.get('description');
      this.data.price = this.route.snapshot.paramMap.get('price');
      this.data.imageUrl = this.route.snapshot.paramMap.get('imageUrl');
      this.data.quantity = this.route.snapshot.paramMap.get('quantity'); 
     
  });
  }

}
