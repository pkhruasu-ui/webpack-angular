import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LazyGuestComponent } from './lazyguest.component';

const lazyGuestRoutes: Routes = [
{
  path: 'lazyguest', component: LazyGuestComponent 
}];

@NgModule({
	declarations: [
		LazyGuestComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forChild(lazyGuestRoutes)
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class LazyGuestModule { }