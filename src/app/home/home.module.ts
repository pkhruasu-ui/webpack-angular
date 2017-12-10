import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';

const appRoutes: Routes = [
{
  path: '', component: HomeComponent 
}];

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(appRoutes)
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class HomeModule { }