import * as _ from "lodash";
import TodoItemModel from "./todo-item-model";

export default class TodoListModel {
  todoItems: Array<TodoItemModel> = [];
  constructor(taskList: Array<TodoItemModel>){
    this.todoItems = taskList;
  }
  addTask(todoTitle: string): TodoItemModel {
    let newTodoItem = new TodoItemModel(todoTitle);
    this.todoItems.push(newTodoItem);
    return newTodoItem;
  }
  removeTaskById(taskId: string): void {
    this.todoItems = _.filter(this.todoItems, (todoItem) => {
      return todoItem.id !== taskId;
    });
  }
}
