"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_list_model_1 = require("../src/TodoList/Model/todo-list-model");
test("Add and Remove Tasks", function () {
    var todoListModel = new todo_list_model_1.default([]);
    var task001 = todoListModel.addTask("Task001");
    expect(todoListModel.todoItems.length).toEqual(1);
    var task002 = todoListModel.addTask("Task002");
    expect(todoListModel.todoItems.length).toEqual(2);
    var task003 = todoListModel.addTask("Task003");
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
test("Sort in Reverse Alphabetical/Numberical Order", function () {
    var todoListModel = new todo_list_model_1.default([]);
    var task001 = todoListModel.addTask("a");
    expect(todoListModel.todoItems.length).toEqual(1);
    var task002 = todoListModel.addTask("b");
    expect(todoListModel.todoItems.length).toEqual(2);
    var task003 = todoListModel.addTask("c");
    expect(todoListModel.todoItems.length).toEqual(3);
    var task004 = todoListModel.addTask("1");
    /*
    *   make sure ids are unique
    */
    expect(todoListModel.todoItems[0].getTodoItemTitle()).toEqual("c");
    expect(todoListModel.todoItems[1].getTodoItemTitle()).toEqual("b");
    expect(todoListModel.todoItems[2].getTodoItemTitle()).toEqual("a");
});
