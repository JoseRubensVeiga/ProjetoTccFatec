import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

import Swal from "sweetalert2";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];
  doing = ["Work", "Play", "Sleep", "To procrastine"];
  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  async addToDo() {
    const newTask = await Swal.fire({
      title: "Digite o nome da tarefa",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Criar",
      cancelButtonText: "Cancelar",
      allowOutsideClick: () => !Swal.isLoading()
    });

    if (newTask.value) {
      this.todo.push(newTask.value);
    }
  }

  async onDelete(type: string, item: any) {
    const response = await Swal.fire({
      icon: "question",
      title: "Você tem certeza?",
      text: `Você está prestes a excluir o item "${item}"`,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: "Excluir",
      cancelButtonText: "Cancelar"
    });

    if (!response.value) {
      return;
    }

    switch (type) {
      case "todo":
        this.todo.splice(this.todo.indexOf(item), 1);
        break;
      case "doing":
        this.doing.splice(this.doing.indexOf(item), 1);
        break;
      case "done":
        this.done.splice(this.done.indexOf(item), 1);
        break;
    }
  }
}
