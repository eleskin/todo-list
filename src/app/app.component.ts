import { Component } from '@angular/core';
import axios from 'axios';

import { ITask } from './ITask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  tasks: Array<ITask> = [];

  constructor() {
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task: ITask): void {
    this.tasks.unshift(task);
  }

  changeTask(id: string, title: string, isComplete: boolean, index: number): void {
    axios
      .patch(`http://localhost:3000/tasks/${id}`, {
        title: title,
        isComplete: isComplete
      })
      .then(response => {
        if (response.status === 200) {
          this.tasks[index].isComplete = response.data.isComplete;
        }
      });
  }

  removeTask(id: string, index: number): void {
    axios
      .delete(`http://localhost:3000/tasks/${id}`)
      .then(response => {
        if (response.status === 200) {
          this.tasks.splice(index, 1);
        }
      });
  }

  ngOnInit(): void {
    axios
      .get('http://localhost:3000/tasks')
      .then(response => {
        this.tasks = response.data;
      });
  }
}
