import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

import { Route, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  {path:'' , component: HomeComponent},
  {path:'home' , component: HomeComponent},
  {path:'form' , component: FormComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
