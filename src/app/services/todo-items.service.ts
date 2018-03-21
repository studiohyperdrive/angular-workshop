import { Injectable } from '@angular/core';

import { TodoItem, TodoItemMap } from '../app.interfaces';

@Injectable()
export class TodoItemsService {
  public itemsById: TodoItemMap = {
    '1': { id: '1', description: 'To do items 1', done: false },
    '2': { id: '2', description: 'To do items 2', done: false },
    '3': { id: '3', description: 'To do items 3', done: false },
    '4': { id: '4', description: 'To do items 4', done: true },
    '5': { id: '5', description: 'To do items 5', done: false },
  };

  public fetchAll(): Promise<TodoItem[]> {
    return new Promise((resolve, reject) => {
      resolve(this.itemsToArray());
    });
  }

  public update(item: TodoItem) {
    this.itemsById = Object.assign({}, this.itemsById, {
      [item.id]: item
    });

    return this.fetchAll();
  }

  private itemsToArray() {
    return Object.keys(this.itemsById).map((key) => {
      return this.itemsById[key];
    });
  }
}
