import TodoListModel from "../src/TodoList/Model/todo-list-model";
import TodoItemController from "../src/TodoList/Controller/todo-item-controller";
import TodoListController from "../src/TodoList/Controller/todo-list-controller";
import * as Enzyme from "enzyme";

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
  expect(task001.getTodoItemId()).not.toEqual(task002.getTodoItemId());
  expect(task001.getTodoItemId()).not.toEqual(task003.getTodoItemId());
  expect(task002.getTodoItemId()).not.toEqual(task003.getTodoItemId());
  todoListModel.removeTaskById(task001.getTodoItemId());
  expect(todoListModel.todoItems.length).toEqual(2);
});
