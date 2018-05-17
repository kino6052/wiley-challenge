import TodoItemModel from "../Model/todo-item-model";

export default class TodoItemController {
  todoItemModel: TodoItemModel = new TodoItemModel("");
  constructor(itemTitle: string){
    this.todoItemModel.title = itemTitle;
  }
  getTodoItemId(): string {
    return this.todoItemModel.id;
  }
  getTodoItemTitle(): string {
    return this.todoItemModel.title;
  }
  setTodoItemTitle(todoItemTitle: string): void {
    this.todoItemModel.title = todoItemTitle;
  }
  getCompleted(): boolean {
    return this.todoItemModel.completed;
  }
  toggleCompleted(): void {
    this.todoItemModel.toggleCompleted();
  }
  getBeingEdited(): boolean {
    return this.todoItemModel.getBeingEdited();
  }
  toggleBeingEdited(): void {
    this.todoItemModel.toggleBeingEdited();
  }
}
