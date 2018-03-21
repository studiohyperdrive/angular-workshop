export interface TodoItem {
  id: string;
  description: string;
  done: boolean;
}

export interface TodoItemMap {
  [x: string]: TodoItem;
}
