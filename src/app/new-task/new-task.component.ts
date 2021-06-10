import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  taskValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.taskValue = event.target.value;
  }

  onSave() {
    if (this.taskValue) {
      console.log(this.taskValue);
    }
  }
}
