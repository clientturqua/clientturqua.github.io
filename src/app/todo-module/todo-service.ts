import { Injectable } from '@angular/core';
import { Todo } from './todo-model';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TodoService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];
  constructor(private http: Http) {

    this.getTodosWithPromise()
      .then(res => {
        var temp: Todo[] = [];

        for (var index = 0; index < res.length; index++) {
          var element = new Todo(res[index]);
          temp.push(element);
        }
        this.todos = temp;
      })

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
    this.deleteTodoWithPromise(todo.id).then(res => {
      this.todos = this.todos
        .map(t => {
          if (t.id === todo.id) {
            t.cancel = !t.cancel;
          }
          return t;
        });
    });
    return;
  }

  deleteItem(id: number) { ////////////
    this.deleteTodoWithPromise(id).then(res => {
      this.todos = this.todos
        .filter(todo => todo.id !== id);
    })

  }

  getAllTodos(): Todo[] {
    return this.todos;
  }


  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;

    this.updateTodoWithPromise(todo).then(res => {
      this.todos = this.todos
        .map(t => {
          if (t.id === todo.id) {
            t.complete = t.complete;
          }
          return t;
        });
    }).catch(err => {
      todo.complete = !todo.complete;
    })

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





  //******************************** */
  getTodosWithObservable(): Observable<Todo[]> {
    return this.http.get('http://localhost:3000/api/todos/all')
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  /// 
  getTodosWithPromise(): Promise<Todo[]> {
    return this.http.get('http://localhost:3000/api/todos/all').toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  deleteTodoWithPromise(id: number): Promise<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:3000/api/todos/' + id + '/destroy/', options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  updateTodoWithPromise(todo: Todo): Promise<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:3000/api/todos/' + todo.id + '/update/', todo, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  addTodoWithObservable(book: Todo): Observable<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/todos/all', 'any', 'RequestOptionsArgs')
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  addTodoWithPromise(todo: Todo): Promise<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/todos/all', 'any', 'RequestOptionsArgs').toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.payload || {};
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
  //Observable<Response> ob = this.http.post(this.url, book, options);
  //burda kaldık
  // getAllTodosFromServer(): Observable<any> {
  //   return this.http.get('http://localhost:3000/api/todos/all')
  //   .map(x => return x.json().payload)
  // } 
  //******************************************** */
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