"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var todo_list_model_1 = __importDefault(require("../src/TodoList/Model/todo-list-model"));
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
    expect(task001.id).not.toEqual(task002.id);
    expect(task001.id).not.toEqual(task003.id);
    expect(task002.id).not.toEqual(task003.id);
    todoListModel.removeTaskById(task001.id);
    expect(todoListModel.todoItems.length).toEqual(2);
});
