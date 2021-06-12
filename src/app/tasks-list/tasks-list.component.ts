import {Component, Input, OnInit} from '@angular/core';

interface Task {
  title: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() tasks!: Array<Task>;

  constructor() { }

  ngOnInit(): void {
  }

}
