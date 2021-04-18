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
          "name": "Legend",
          "description": "In the 1960s, Reggie Kray is a former boxer who has become an important part of the criminal underground in London. At the start of the film, his twin brother Ron is locked up in a psychiatric hospital for paranoid schizophrenia. Reggie uses threats to obtain the premature release of his brother. The twins unite their efforts to control a large part of London's criminal underworld. One of their first efforts is to muscle-in on the control of a local nightclub, using extortion and brutal violence..",
          "price": "170.00",
          "imageUrl": "./assets/movies/legend.jpg",
          "quantity": 56840
      },
      {
          "id": 2,
          "name": "American Gangster Cover",
          "description": "American Gangster is a 2007 American biographical crime film directed and produced by Ridley Scott and written by Steven Zaillian. The film is fictionally based on the criminal career of Frank Lucas, a gangster from La Grange, North Carolina who smuggled heroin into the United States on American service planes returning from the Vietnam War, before being detained by a task force led by detective Richie Roberts. The film stars Denzel Washington and Russell Crowe in their first lead acting roles together since 1995's Virtuosity. The film also co-stars Ted Levine, John Ortiz, Josh Brolin, Chiwetel Ejiofor, Norman Reedus, Ruby Dee, Lymari Nadal and Cuba Gooding Jr..",
          "price": "302.00",
          "imageUrl": "./assets/movies/american-gangster-cover.jpg",
          "quantity": 9358
      },
      {
          "id": 3,
          "name": "Ant Man Cover",
          "description": "Ant-Man is the name of several superheroes appearing in books published by Marvel Comics. Created by Stan Lee, Larry Lieber and Jack Kirby, Ant-Man's first appearance was in Tales to Astonish #35 (September 1962). The persona was originally the brilliant scientist Hank Pym's superhero alias after inventing a substance that can change size, but reformed thieves Scott Lang and Eric O'Grady also took on the mantle after the original changed his superhero identity to various other aliases, such as Giant-Man, Goliath, and Yellowjacket. Pym's Ant-Man is also a founding member of the super hero team known as the Avengers. The character has appeared in several films based on the Marvel character, such as Ant-Man (2015), Captain America: Civil War (2016), Ant-Man and the Wasp (2018), and Avengers: Endgame (2019)..",
          "price": "279.00",
          "imageUrl": "./assets/movies/ant-man-cover.jpg",
          "quantity": 90316
      },
      {
        "id": 4,
        "name": "Deadpoll",
        "description": "Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name. Distributed by 20th Century Fox, it is the eighth film in the X-Men film series. Directed by Tim Miller from a screenplay by Rhett Reese and Paul Wernick, it stars Ryan Reynolds in the title role alongside Morena Baccarin, Ed Skrein, T. J. Miller, Gina Carano, and Brianna Hildebrand. In the film, Wade Wilson hunts the man who gave him mutant abilities and a scarred physical appearance, becoming the beloved antihero Deadpool..",
        "price": "302.00",
        "imageUrl": "./assets/movies/deadpool-cover.jpg",
        "quantity": 9358
    },
    {
        "id": 5,
        "name": "Fast And Furious",
        "description": "Fast & Furious (also known as The Fast and the Furious) is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, and spies. The franchise also includes short films, a television series, live shows, video games, and theme park attractions. It is distributed by Universal Pictures.The first film was released in 2001, which began the original trilogy of films focused on illegal street racing, and culminated in the film The Fast and the Furious: Tokyo Drift (2006). The series transitioned towards heists and spying with Fast & Furious (2009), and was followed by four sequels. F9 is set to be released in 2021, with a tenth and eleventh film planned. The main films are collectively known as The Fast Saga..",
        "price": "279.00",
        "imageUrl": "./assets/movies/fast-and-furious-7.jpg",
        "quantity": 90316
    },
    {
      "id": 6,
      "name": "Jurassic World",
      "description": "Jurassic World is a 2015 American science fiction adventure film.[5] It is the fourth installment of the Jurassic Park franchise and the first in the Jurassic World trilogy. Directed by Colin Trevorrow, written by Derek Connolly and Trevorrow, and produced by Frank Marshall and Patrick Crowley, the film stars Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio, Ty Simpkins, Nick Robinson, Omar Sy, BD Wong, and Irrfan Khan. Set 22 years after the events of Jurassic Park, Jurassic World takes place on the same fictional island of Isla Nublar, located off the Pacific coast of Costa Rica. A successful theme park of cloned dinosaurs, dubbed Jurassic World, has operated on the island for years, bringing John Hammond's dream to fruition. The park plunges into chaos when a transgenic dinosaur escapes from its enclosure and goes on a rampage, while a group of trained Velociraptors are utilized in neutralizing it..",
      "price": "302.00",
      "imageUrl": "./assets/movies/jurassic-world-cover.jpg",
      "quantity": 9358
  },
  {
      "id": 7,
      "name": "Mission Impossible",
      "description": "Mission: Impossible is a series of American action spy films based on and a follow-on from the television series of the same name created by Bruce Geller. The series is mainly produced by and stars Tom Cruise, whose character is Ethan Hunt, an agent of the Impossible Missions Force (IMF). The films have been directed, written, and scored from various filmmakers and crew, while incorporating musical themes from the original series by Lalo Schifrin..",
      "price": "279.00",
      "imageUrl": "./assets/movies/mission-impossible-rogue-nation-cover.jpg",
      "quantity": 90316
  }
  ]
  return Movies;
  }

  

}
