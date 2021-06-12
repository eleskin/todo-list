import {Component, Input, OnInit} from '@angular/core';
import { ITask } from '../ITask';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() tasks!: Array<ITask>;
  @Input() removeTask!: any;
  @Input() changeTask!: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id: string, index:  number): void {
    this.removeTask(id, index);
  }
}
