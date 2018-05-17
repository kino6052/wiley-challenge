import TodoListModel from "../Model/todo-list-model";
import TodoListView from "../View/todo-list-view";

export default class TodoListController {
  todoListModel: TodoListModel = new TodoListModel([]);
  todoListView: TodoListView = new TodoListView();
  display(): void {

  }
}
