"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var todo_list_model_1 = __importDefault(require("../src/TodoList/Model/todo-list-model"));
var todo_list_controller_1 = __importDefault(require("../src/TodoList/Controller/todo-list-controller"));
var todo_list_view_1 = __importDefault(require("../src/TodoList/View/todo-list-view"));
var Enzyme = __importStar(require("enzyme"));
var react_1 = __importDefault(require("react"));
test("Render application", function () {
    var todoListController = new todo_list_controller_1.default();
    todoListController.addTask("Task001");
    todoListController.addTask("Task002");
    todoListController.addTask("Task003");
    var wrapper = Enzyme.mount(react_1.default.createElement(todo_list_view_1.default, { "controller": _this }));
    console.log(wrapper);
});
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
