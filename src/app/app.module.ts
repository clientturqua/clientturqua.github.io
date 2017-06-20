import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoModule } from './todo-module/todo-module';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';//
import { TimepickerModule } from 'ngx-bootstrap/timepicker';//
import { DatePickerModule } from 'ng2-datepicker';//

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodoModule,
    ButtonsModule.forRoot(),//
    TimepickerModule.forRoot(),//
    DatePickerModule//
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
