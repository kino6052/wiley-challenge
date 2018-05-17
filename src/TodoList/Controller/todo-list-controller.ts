import TodoListModel from "../Model/todo-list-model";
import TodoItemController from "../Controller/todo-item-controller";
import PersistenceController from "../../Persistence/persistence";
import { TodoListView } from "../View/todo-list-view";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class TodoListController {
  todoListModel: TodoListModel = new TodoListModel([]);
  persistenceController: PersistenceController = new PersistenceController();
  constructor(){
    this.loadTasks();
  }
  display(): void {
    ReactDOM.render(React.createElement(TodoListView, {"controller": this}), document.getElementById('application'));
  }
  saveTasks(){
    this.persistenceController.saveTodoItemsToLocalStorage(this.todoListModel.todoItems);
  }
  loadTasks(){
    this.todoListModel.todoItems = this.persistenceController.retrieveTodoItemsFromLocalStorage();
  }
  addTask(taskTitle: string): TodoItemController {
    let task = this.todoListModel.addTask(taskTitle);
    this.saveTasks();
    return task;
  }
  removeTaskById(taskId: string): void {
    this.todoListModel.removeTaskById(taskId);
    this.saveTasks();
  }
}
