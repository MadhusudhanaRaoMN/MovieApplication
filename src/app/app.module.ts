import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
// import { ChartsModule } from 'ng2-charts/ng2-charts';
import * as ch from 'ng2-charts';
// For MDB Angular Free



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { MoviewDetailsComponent } from './Components/moview-details/moview-details.component';
import { MediaPageComponent } from './Components/media-page/media-page.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MoviewDetailsComponent,
    MediaPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    // ChartsModule,
    ch.ChartsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
