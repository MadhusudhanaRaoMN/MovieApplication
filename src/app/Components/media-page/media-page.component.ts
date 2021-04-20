import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.css']
})
export class MediaPageComponent implements OnInit {

  movies : any[]
  visibleMovies: any[] = null;

  constructor() { }

  ngOnInit(): void {
    this.movies = this.getMovies()
  }

  getMovieDetails(movieDetails){
    console.log(movieDetails)
  }


  getMovies() : any[] {
   let Movies : any[] =
    [
      {
          "id": 1,
          "name": "Black Panther",
          "description": "After the events of Captain America: Civil War, King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader",
          "price": "100.00",
          "imageUrl": "./assets/movies/panther.jpg",
          "quantity": 99870
      },
      {
          "id": 2,
          "name": "Grottmannen Dug",
          "description": "AmSet at the dawn of time, when prehistoric creatures and woolly mammoths roamed the earth, Early Man tells the story of Dug, along with sidekick Hognob as they unite his tribe against a mighty enemy Lord Nooth and his Bronze Age City to save their home.",
          "price": "500.00",
          "imageUrl": "./assets/movies/dug.jpg",
          "quantity": 654367
      },
      {
          "id": 3,
          "name": "Aiyaary",
          "description": "Two officers with patriotic hearts suddenly have a fallout. The mentor, Colonel Abhay Singh has complete faith in the country's system while prot\u00e9g\u00e9 Major Jai Bakshi thinks differently due to a recent stint in surveillance.",
          "price": "129.00",
          "imageUrl": "./assets/movies/aiyyary.jpg",
          "quantity": 765432
      },
      {
        "id": 4,
        "name": "The Party",
        "description": "To celebrate her long-awaited prestigious post as a Shadow Minister for Health and, hopefully, the stepping stone to party leadership, the newly-appointed British opposition politician, Janet, is throwing a party for friends at her London flat. Of course, in this select and intimate soir\u00e9e, apart from Bill--Janet's self-denying academic husband--a motley crew of elite hand-picked guests have been invited: There's April, the sourly cynical American best friend; her unlikely German husband, Gottfried; there's also Jinny and Martha; and finally, Tom, the smooth banker in the impeccable suit. But inevitably, before dinner is served, the upbeat ambience will shatter to pieces, as festering secrets will start surfacing in this perfect domestic war-zone. Undoubtedly, after this night, things will never be the same again.",
        "price": "123.00",
        "imageUrl": "./assets/movies/party.jpg",
        "quantity": 12349
    },
    {
        "id": 5,
        "name": "The Boy Downstairs",
        "description": "A young woman is forced to reflect on her first relationship when she inadvertently moves into her ex-boyfriend's apartment building.",
        "price": "678.00",
        "imageUrl": "./assets/movies/boy.jpg",
        "quantity": 76543
    }
  ]
  return Movies;
  }

  

}
