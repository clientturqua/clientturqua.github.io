import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo-model'

import * as moment from 'moment'


@Pipe({
  name: 'toReadableDate'
})

export class ToReadableDate implements PipeTransform {
  transform(value: Date): string {
    //console.log(value);
    return moment(value).format('Do MMM YY');
  }
}
@Pipe({
  name: 'toReadableToday'
})

export class ToReadableToday implements PipeTransform {
  transform(value: Date): string {
   // console.log(value);
    return moment(value).format('Do MMM YY');
  }
}
@Pipe({//
  name: 'toReadableTime'
})

export class ToReadableTime implements PipeTransform {
  transform(value: HTMLTimeElement): string {
   // console.log(value);
    return moment(value).format('HH:mm');
  }
}//

@Pipe({
  name: 'completedTodoPipes'
})

export class CompletedTodoPipe implements PipeTransform {
  transform(value: Todo[]): any {
    //console.log(value);
    return value.filter(t => t.complete === true);
  }
}

@Pipe({
  //eklenti
  name: 'canceledTodoPipes'
})

export class CanceledTodoPipe implements PipeTransform {
  transform(value: Todo[]): any {
    //console.log(value);
    return value.filter(t => t.cancel === true);
  }
}
//
@Pipe({
  name: 'openTodoPipes'
})

export class OpenTodoPipe implements PipeTransform {
  transform(value: Todo[]): any {
    //console.log(value);
    return value.filter(t => t.complete === false);
  }
}



@Pipe({
  name: 'completedTodoLengthPipes'
})

export class CompletedTodoLengthPipe implements PipeTransform {
  transform(value: Todo[]): any {
   // console.log(value);
    return value.filter(t => t.complete === true).length;
  }
}
@Pipe({
  name: 'canceledTodoLengthPipes'
})

export class CanceledTodoLengthPipe implements PipeTransform {
  transform(value: Todo[]): any {
   // console.log(value);
    return value.filter(t => t.cancel === true).length;
  }
}

@Pipe({
  name: 'openTodoLengthPipes'
})

export class OpenTodoLengthPipe implements PipeTransform {
  transform(value: Todo[]): any {
   // console.log(value);
    return value.filter(t => t.complete === false).length;
  }
}
