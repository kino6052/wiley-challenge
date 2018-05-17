import TodoListModel from "../Model/todo-list-model";
import TodoItemController from "../Controller/todo-item-controller";
import { TodoListView } from "../View/todo-list-view";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class TodoListController {
  todoListModel: TodoListModel = new TodoListModel([]);
  display(): void {
    ReactDOM.render(React.createElement(TodoListView, {"controller": this}), document.getElementById('application'));
  }
  addTask(taskTitle: string): TodoItemController {
    return this.todoListModel.addTask(taskTitle);
  }
  removeTaskById(taskId: string): void {
    this.todoListModel.removeTaskById(taskId);
  }
  getBeingEdited(): boolean {
    return this.getBeingEdited();
  }
}
