import * as _ from "lodash";

export default class TodoItemModel {
  title: string = "";
  id: string = _.uniqueId();
  constructor(todoTitle: string){
    this.title = todoTitle;
  }
}
