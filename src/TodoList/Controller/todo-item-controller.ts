import TodoItemModel from "../Model/todo-item-model";
import TodoItemView from "../View/todo-item-view";

export default class TodoItemController {
  todoItemModel: TodoItemModel = new TodoItemModel("");
  todoItemView: TodoItemView = new TodoItemView();
  constructor(itemTitle: string){
    this.todoItemModel.title = itemTitle;
  }
  getItemId(): string {
    return this.todoItemModel.id;
  }
  getItemTitle(): string {
    return this.todoItemModel.title;
  }
}
