export class Todo {

  id: number;
  title: string = '';

  complete: boolean = false;
  cancel: boolean = false;
  dueDate: Date;
  dueTime: HTMLTimeElement;//
  today: number = Date.now();//
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.title = values['description'];
  }
  
}
