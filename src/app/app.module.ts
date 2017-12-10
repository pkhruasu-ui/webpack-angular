import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { LazyGuestModule } from './lazyguest/lazyguest.module';

import '../style/app.scss';
import '../style/other.css';

const appRoutes: Routes = [ 
  {
     path: '',
     redirectTo: '/home',
     pathMatch: 'full'
  } 
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LazyGuestModule,
    RouterModule.forRoot(appRoutes) // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }