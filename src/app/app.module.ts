import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataReducer } from './Store/Reducers/course.reducer';
import { FormsModule } from '@angular/forms';


//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from  '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(
      DataReducer
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
