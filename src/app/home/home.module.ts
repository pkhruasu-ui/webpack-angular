import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';

const appRoutes: Routes = [
{
  path: 'home', component: HomeComponent 
}];

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forChild(appRoutes)
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class HomeModule { }