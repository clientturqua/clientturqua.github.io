import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { TodoService } from './../todo-service';
import { Todo } from './../todo-model';
import { RouterModule, Routes } from '@angular/router';
@Component({
  moduleId: module.id,//
  selector: 'todo-comp',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  providers: [TodoService],
  animations: [
    trigger('movementtrigger', [
      state('firstpos', style({ transform: 'translateY(0)' })),
      state('secondpos', style({ transform: 'translateY(25%)' })),
      transition('firstpos => secondpos', [
        animate('200ms ease-in')
      ]),
      transition('secondpos => firstpos', [
        animate('200ms ease-out')
      ])
    ]),
    trigger('showmsg', [
      state('show', style({ height: '*' })),
      state('hide', style({ height: '0px' })),
      transition('show <=> hide', [
        animate(1000)
      ])
    ])
  ]
  
})

export class TodoComponent implements OnInit {
  newTodo: Todo = new Todo();
  selection = 'ALL';
  showHide: boolean = false;
  //state: string = 'show';
  show=true;
  hidden=false;
  visibility='visible';
  show1=true;
  hidden1=false;
  visibility1='visible';

  constructor(private todoService: TodoService) {
  }
  toggleShow(){
    this.show=!this.show;
  }
  toggleShow1(){
    this.show1=!this.show1;
  }
  /*toggleHidden(){
    this.show=!this.show;
  }
  toggleVisible(){
    this.visibility==='visible'?'hidden':'visible';
  }*/
 /* togglestates() {
    this.state = (this.state === 'show' ? 'hide' : 'show');
  }*/
  changeShowStatus(todo) {
    this.showHide = !this.showHide;
  }
  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }
  getTodoById(id: number) {//
    this.todoService.getTodoById(id);
  }
  removeTodo(todo) {
    this.todoService.deleteTodoById(todo);
    // this.todoService.deleteItem(todo.id);
  }
  get todos() {
    return this.todoService.getAllTodos();
  }

  get openTodos() {
    return this.todoService.getAllTodos().filter(t => t.complete === false && t.cancel === false);
  }

  get completedTodos() {
    return this.todoService.getAllTodos().filter(t => t.complete === true && t.cancel === false);
  }

  get canceledTodos() {
    return this.todoService.getAllTodos().filter(t => t.cancel === true);
  }

  changeSelection(_selection) {

    this.selection = _selection;
    console.log('selection changed: ' + _selection);
  }

  ngOnInit() {
  }
}