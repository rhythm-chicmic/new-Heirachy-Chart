import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicPrimitivesModule } from 'ngx-basic-primitives';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio'; 


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    MatSliderModule,
    BasicPrimitivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
