import {Component, Input, OnInit} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() onAddTask!: any;

  taskTitle: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.taskTitle = event.target.value;
  }

  onSave() {
    if (this.taskTitle) {
      axios
        .post('http://localhost:3000/tasks', {
          title: this.taskTitle,
          isComplete: false
        })
        .then(response => {
          this.onAddTask(response.data);
          this.taskTitle = '';
        });
    }
  }
}
