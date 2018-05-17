import TodoListModel from "../src/TodoList/Model/todo-list-model";
import TodoItemModel from "../src/TodoList/Model/todo-item-model";

test("Add and Remove Tasks", () => {
  let todoListModel: TodoListModel = new TodoListModel([]);
  let task001: TodoItemModel = todoListModel.addTask("Task001");
  expect(todoListModel.todoItems.length).toEqual(1);
  let task002: TodoItemModel = todoListModel.addTask("Task002");
  expect(todoListModel.todoItems.length).toEqual(2);
  let task003: TodoItemModel = todoListModel.addTask("Task003");
  expect(todoListModel.todoItems.length).toEqual(3);
  /*
  *   make sure ids are unique
  */
  expect(task001.id).not.toEqual(task002.id);
  expect(task001.id).not.toEqual(task003.id);
  expect(task002.id).not.toEqual(task003.id);
  todoListModel.removeTaskById(task001.id);
  expect(todoListModel.todoItems.length).toEqual(2);
});
