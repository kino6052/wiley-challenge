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

test("Sort in Reverse Alphabetical/Numberical Order", () => {
  let todoListModel: TodoListModel = new TodoListModel([]);
  let task001: TodoItemController = todoListModel.addTask("a");
  expect(todoListModel.todoItems.length).toEqual(1);
  let task002: TodoItemController = todoListModel.addTask("b");
  expect(todoListModel.todoItems.length).toEqual(2);
  let task003: TodoItemController = todoListModel.addTask("c");
  expect(todoListModel.todoItems.length).toEqual(3);
  let task004: TodoItemController = todoListModel.addTask("1");
  /*
  *   make sure ids are unique
  */
  expect(todoListModel.todoItems[0].getTodoItemTitle()).toEqual("c");
  expect(todoListModel.todoItems[1].getTodoItemTitle()).toEqual("b");
  expect(todoListModel.todoItems[2].getTodoItemTitle()).toEqual("a");
});
