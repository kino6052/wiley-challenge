import * as _ from "lodash";

export default class TodoItemModel {
  title: string = "";
  completed: boolean = false;
  id: string = _.uniqueId();
  beingEdited: boolean = false;
  constructor(todoTitle: string, completed: boolean, id=_.uniqueId()){
    this.title = todoTitle;
    this.completed = completed;
    this.id = id;
  }
  updateTitle(newTitle: string){
    this.title = newTitle;
  }
  toggleCompleted(){
    this.completed = !this.completed;
  }
  getBeingEdited(){
    return this.beingEdited;
  }
  toggleBeingEdited(){
    this.beingEdited = !this.beingEdited;
  }
}
