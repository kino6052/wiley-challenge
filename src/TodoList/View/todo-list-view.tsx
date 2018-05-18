import React from "react";
import TodoListController from "../Controller/todo-list-controller";
import TodoItemController from "../Controller/todo-item-controller";

export interface IMainState {
    title: string;
    controller: TodoListController;
    editedValue: string;
}

export interface IMainProps {
  controller: TodoListController
}

export class TodoListView extends React.Component<IMainProps, IMainState> {
    state: IMainState = {title: '', controller: this.props.controller, editedValue: ""}
    constructor () {
        super({controller: new TodoListController()}, {});
        this.changeName = this.changeName.bind(this);
        this.addItem = this.addItem.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.toggleBeingEdited = this.toggleBeingEdited.bind(this);
        this.editName = this.editName.bind(this);
        this.cancelChange = this.cancelChange.bind(this);
    }
    addItem () {
        this.state.controller.addTask(this.state.title)
        this.setState({
            title: ''
        });
    }

    changeName (e: any) {
        this.setState({
            title: e.target.value
        });
    }

    editName (e: any) {
        this.setState({
            editedValue: e.target.value
        });
    }

    saveChange (todoItemController: TodoItemController) {
      return () => {
        todoItemController.setTodoItemTitle(this.state.editedValue);
        todoItemController.toggleBeingEdited();
        this.state.controller.saveTasks();
        this.setState({...this.state});
      }
    }

    cancelChange (todoItemController: TodoItemController) {
      return () => {
        todoItemController.toggleBeingEdited();
        this.setState({...this.state});
      }
    }

    toggleCompleted(todoItemController: TodoItemController){
      return () => {
        todoItemController.toggleCompleted();
        this.state.controller.saveTasks();
        this.setState({...this.state});
      }
    }

    toggleBeingEdited(todoItemController: TodoItemController){
      return () => {
        todoItemController.toggleBeingEdited();
        this.setState({...this.state, editedValue: todoItemController.getTodoItemTitle()});
      }
    }

    removeItem(todoItemController: TodoItemController){
      return () => {
        this.state.controller.removeTaskById(todoItemController.getTodoItemId());
        this.setState({...this.state});
      }
    }

    render () {
        return (
            <div className={"Container"}>
                <h1> Todo </h1>
                <div className={"TaskInputContainer"}>
                    <input className={"TitleInput"} type="text" value={this.state.title} onChange={this.changeName}/>
                </div>
                <div className={"AddTaskButton"} onClick={this.addItem}>Add Task</div>
                {
                  this.state.controller.todoListModel.todoItems.map(
                    todoItemController => {
                      return <ul className={"ItemUL"}>
                        {
                          todoItemController.getBeingEdited() ?
                          <div className={"ItemContainer"}>
                            <input type="text" value={this.state.editedValue} onChange={this.editName}/>
                            <button onClick={this.saveChange(todoItemController)}>Save</button>
                            <button onClick={this.cancelChange(todoItemController)}>Cancel</button>
                          </div>
                          :
                          <div className={"ItemContainer"}>
                            <input className={"Checkbox"} type="checkbox" checked={todoItemController.getCompleted() ? true : false} onClick={this.toggleCompleted(todoItemController)}/>
                            <p
                              className={todoItemController.getCompleted() ? "TitleCompleted" : "TitleNormal"}
                            >
                              {todoItemController.getTodoItemTitle()}
                            </p>
                            <p>
                              <span className={"ItemButton"} onClick={this.removeItem(todoItemController)}>remove</span>
                              <span className={"ItemButton"} onClick={this.toggleBeingEdited(todoItemController)}>edit</span>
                            </p>
                          </div>
                        }
                      </ul>
                    }
                  )
                }
            </div>
        );
    }
}
