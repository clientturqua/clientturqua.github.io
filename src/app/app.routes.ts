import {Routes,RouterModule} from '@angular/router';
import {TodoComponent} from './todo-module/todo-component/todo.component';
const routes : Routes = [
    {
        path:"todo-module", component: TodoComponent
    },
     {
        path:"**", component: TodoComponent
    }
]
export const routing =RouterModule.forRoot(routes);