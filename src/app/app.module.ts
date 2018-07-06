import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


/* 3rd Party Modules */


/* Routes */
import { AppRoutingModule } from '../app/routes/app-routing.module';


/* User Defined Modules */
import { SharedComponentsModule } from '../app/shared/components/shared-components.module';
import { HomeModule } from '../app/modules/home/home.module';


/* Components */
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,

    
    SharedComponentsModule,
    HomeModule,
    

    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
