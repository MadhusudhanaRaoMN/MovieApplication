import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MediaPageComponent } from './Components/media-page/media-page.component';
import { MoviewDetailsComponent } from './Components/moview-details/moview-details.component';

const routes: Routes = [
  {path : "" , component: LoginComponent},
  {path : "login" , component: LoginComponent},
  {path : "home", component : HomeComponent},
  {path : "media", component : MediaPageComponent},
  {path : "movie-details", component : MoviewDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
