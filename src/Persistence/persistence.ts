import TodoItemController from "../TodoList/Controller/todo-item-controller";

export default class PersistenceController {
  todoItems: Array<TodoItemController> = [];
  constructor(){

  }
  saveTodoItemsToLocalStorage(todoItems: Array<TodoItemController>): void {
    let items = todoItems.map((item)=>{
      return {id: item.getTodoItemId(), completed: item.getCompleted(), title: item.getTodoItemTitle()}
    })
    localStorage.setItem('todoItems', JSON.stringify(items));
  }
  retrieveTodoItemsFromLocalStorage(): Array<TodoItemController> {
    let items = <Array<StoredItem>>JSON.parse(localStorage.getItem('todoItems') || "[]");
    let todoItems = items.map((item)=>{
      let todoItemController = new TodoItemController(item.title);
      todoItemController.todoItemModel.id = item.id;
      todoItemController.todoItemModel.completed = item.completed;
      return todoItemController;
    });
    return todoItems;
  }
}

interface StoredItem {
  id: string,
  title: string,
  completed: boolean
}
