import { Injectable } from '@angular/core';
import { Todo } from './todo-model';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http/http";

@Injectable()
export class TodoService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];
  constructor(private http: Http) {
  }

/*getContacts(){
  return Promise.resolve(CONTACTS);
}
insertContact(contact: Contact){
  Promise.resolve(CONTACTS).then((contacts: Contact[]) =>contacts.push(contact));
}*/
  addTodo(todo: Todo) {
    if (todo.title.trim() === '')
      return;
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos = this.todos.concat([todo]);
  }

  deleteTodoById(todo: Todo) {
    this.todos = this.todos
      .map(t => {
        if (t.id === todo.id) {
          t.cancel = !t.cancel;
        }
        return t;
      });
    return;
  }
  deleteItem(id: number) { ////////////
    this.todos = this.todos
      .filter(todo => todo.id !== id);
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }


  toggleTodoComplete(todo: Todo) {
    this.todos = this.todos
      .map(t => {
        if (t.id === todo.id) {
          t.complete = !t.complete;
        }
        return t;
      });

    return;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }


//burda kaldık
  getAllTodosFromServer(): Observable<any> {
    return this.http.get('http://localhost:3000/api/todos/all')
   // .map(x => return x.json().payload)
  }
  ////
  // // Simulate POST /todos
  // addTodo(todo: Todo): TodoService {
  //   if (!todo.id) {
  //     todo.id = ++this.lastId;
  //   }
  //   this.todos = this.todos.concat([todo]);
  //   return this;
  // }

  // // Simulate DELETE /todos/:id
  // deleteTodoById(id: number): TodoService {
  //   this.todos = this.todos
  //     .filter(todo => todo.id !== id);
  //   return this;
  // }

  // // Simulate PUT /todos/:id
  // updateTodoById(id: number, values: Object = {}): Todo {
  //   let todo = this.getTodoById(id);
  //   if (!todo) {
  //     return null;
  //   }
  //   Object.assign(todo, values);
  //   return todo;
  // }

  // // Simulate GET /todos
  // getAllTodos(): Todo[] {
  //   return this.todos;
  // }

  // // Simulate GET /todos/:id
  // getTodoById(id: number): Todo {
  //   return this.todos
  //     .filter(todo => todo.id === id)
  //     .pop();
  // }

  // // Toggle todo complete
  // toggleTodoComplete(todo: Todo) {
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }

}