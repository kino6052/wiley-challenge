import * as _ from "lodash";
import TodoItemController from "../Controller/todo-item-controller";

export default class TodoListModel {
  todoItems: Array<TodoItemController> = [];
  constructor(taskList: Array<TodoItemController>){
    this.todoItems = taskList;
  }
  addTask(todoTitle: string): TodoItemController {
    let newTodoItem: TodoItemController = new TodoItemController(todoTitle);
    this.todoItems.unshift(newTodoItem);
    newTodoItem.todoItemModel
    this.todoItems = _.sortBy(this.todoItems, "todoItemModel.title").reverse();
    return newTodoItem;
  }
  removeTaskById(taskId: string): void {
    this.todoItems = _.filter(this.todoItems, (todoItem) => {
      return todoItem.getTodoItemId() !== taskId;
    });
  }
  sortInReverseOrder(){
    this.todoItems.map
  }
}
