import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task;
  @Output() onDeletetask:EventEmitter<Task>=new EventEmitter();

  faCoffee = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task):void{
   this.onDeletetask.emit(task);
  }

}
