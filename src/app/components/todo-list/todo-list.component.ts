import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { TodoItem } from '../../app.interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() public items: TodoItem[] = [];
  @Output() public update = new EventEmitter<TodoItem>();

  public title = 'Designo Todo';

  public toggleItem(item: TodoItem) {
    this.update.emit({
      id: item.id,
      description: item.description,
      done: !item.done
    });
  }
}
