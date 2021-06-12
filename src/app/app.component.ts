import { Component } from '@angular/core';
import axios from 'axios';

interface Task {
  title: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  tasks: Array<Task> = [];

  constructor() {
    this.onAddTask = this.onAddTask.bind(this);
  }

  onAddTask(task: Task): void {
    this.tasks.unshift(task);
  }

  ngOnInit(): void {
    axios
      .get('http://localhost:3000/tasks')
      .then(response => {
        this.tasks = response.data;
      });
  }
}
