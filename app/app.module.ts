import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HikeModule, 
    HomeModule,
    ContactModule,
    RouterModule.forRoot([            
      { path: '', redirectTo: 'home', pathMatch: 'full' },
	    { path: '**', component: PageNotFoundComponent }
    ]) 
    
    ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
