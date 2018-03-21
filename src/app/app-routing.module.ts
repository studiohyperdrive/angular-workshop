import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home/home.page';
import { TodoPageComponent } from './pages/todo/todo.page';

const ROUTES = [
  { path: 'home', component: HomePageComponent },
  { path: 'todo', component: TodoPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
