import {Component, Input, OnInit} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() addTask!: any;

  taskTitle: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.taskTitle = event.target.value;
  }

  onSave(event: any) {
    event.preventDefault();
    if (this.taskTitle) {
      axios
        .post('http://localhost:3000/tasks', {
          title: this.taskTitle,
          isComplete: false
        })
        .then(response => {
          this.addTask(response.data);
          this.taskTitle = '';
        });
    }
  }
}
