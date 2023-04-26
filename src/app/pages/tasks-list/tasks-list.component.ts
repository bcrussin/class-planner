import { Component } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  tasks: Task[] = new Array<Task>();

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.getAll();
  }

  deleteTask(id: number) {
    this.tasksService.delete(id);
  }
}
