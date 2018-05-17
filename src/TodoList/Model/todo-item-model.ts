import * as _ from "lodash";

export default class TodoItemModel {
  title: string = "";
  completed: boolean = false;
  id: string = _.uniqueId();
  constructor(todoTitle: string){
    this.title = todoTitle;
  }
  updateTitle(newTitle: string){
    this.title = newTitle;
  }
  toggleCompleted(){
    this.completed = !this.completed;
  }
}
