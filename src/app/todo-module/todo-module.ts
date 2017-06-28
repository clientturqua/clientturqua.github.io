import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './todo-component/todo.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';//
import { TimepickerModule } from 'ngx-bootstrap/timepicker';//
import { DatePickerModule } from 'ng2-datepicker';//
import { HttpModule } from '@angular/http';
import { CompletedTodoLengthPipe, CompletedTodoPipe, OpenTodoLengthPipe, OpenTodoPipe, CanceledTodoPipe, CanceledTodoLengthPipe, ToReadableDate,ToReadableTime,ToReadableToday} from './todo-pipes';

@NgModule({
  imports: [BrowserModule, FormsModule,ButtonsModule.forRoot(), TimepickerModule.forRoot(),DatePickerModule,HttpModule],
  exports: [TodoComponent],
  declarations: [TodoComponent, CompletedTodoLengthPipe, CompletedTodoPipe, OpenTodoLengthPipe, OpenTodoPipe, CanceledTodoPipe, CanceledTodoLengthPipe, ToReadableDate,ToReadableTime,ToReadableToday],
  providers: [],
})
export class TodoModule { }