import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];
  addTodo(title: string, subtitle: string) {
    console.log(`title: ${title}, subtitle: ${subtitle}`);
    const todo = new Todo();
    todo.id = uuidv4();
    todo.title = title;
    todo.subtitle = subtitle;
    this.todoArray.push(todo);
  }
  getTodos() {
    return this.todoArray;
  }
  removeTodoById(id: string): Todo[] {
    this.todoArray = this.todoArray.filter((item) => item.id !== id);
    return this.todoArray;
  }
}
