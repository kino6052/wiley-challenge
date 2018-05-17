import TodoListModel from "../src/TodoList/Model/todo-list-model";
import TodoItemController from "../src/TodoList/Controller/todo-item-controller";

test("Add and Remove Tasks", () => {
  let todoListModel: TodoListModel = new TodoListModel([]);
  let task001: TodoItemController = todoListModel.addTask("Task001");
  expect(todoListModel.todoItems.length).toEqual(1);
  let task002: TodoItemController = todoListModel.addTask("Task002");
  expect(todoListModel.todoItems.length).toEqual(2);
  let task003: TodoItemController = todoListModel.addTask("Task003");
  expect(todoListModel.todoItems.length).toEqual(3);
  /*
  *   make sure ids are unique
  */
  expect(task001.getItemId()).not.toEqual(task002.getItemId());
  expect(task001.getItemId()).not.toEqual(task003.getItemId());
  expect(task002.getItemId()).not.toEqual(task003.getItemId());
  todoListModel.removeTaskById(task001.getItemId());
  expect(todoListModel.todoItems.length).toEqual(2);
});
