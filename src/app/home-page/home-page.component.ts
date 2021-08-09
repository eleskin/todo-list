import { Component, OnInit } from '@angular/core';
import {ITask} from '../ITask';
import axios from 'axios';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        if (response.status === 200) {
          this.tasks[index].isComplete = response.data.isComplete;
        }
      })
      .catch(() => localStorage.removeItem('token'));
  }

  removeTask(id: string, index: number): void {
    axios
      .delete(`http://localhost:3000/tasks/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        if (response.status === 200) {
          this.tasks.splice(index, 1);
        }
      })
      .catch(() => localStorage.removeItem('token'));
  }

  ngOnInit(): void {
    console.log();
    axios
      .get('http://localhost:3000/tasks', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        this.tasks = response.data;
      })
      .catch(() => localStorage.removeItem('token'));
  }
}
