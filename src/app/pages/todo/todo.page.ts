import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../../app.interfaces';
import { TodoItemsService } from '../../services/todo-items.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo.page.html',
})
export class TodoPageComponent implements OnInit {
  public items: TodoItem[] = [];

  constructor(private todoItemsService: TodoItemsService) {}

  public ngOnInit() {
    this.todoItemsService.fetchAll()
      .then((items) => {
        this.items = items;
      });
  }

  public onUpdateItem(item: TodoItem) {
    this.todoItemsService.update(item)
      .then((items) => {
        this.items = items;
      });
  }
}
