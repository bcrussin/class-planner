import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { ClassTag } from './class-tags/class-tag';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = new Array<Task>();

  constructor() {
    this.load();
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  load() {
    if (localStorage.hasOwnProperty('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks')!);
      console.log('Loaded ' + this.tasks.length + ' task(s)');
    } else {
      console.log('No save data found');
    }
  }

  getAll() {
    return this.tasks;
  }

  get(id: number) {
    return this.tasks[id];
  }

  getId(task: Task) {
    return this.tasks.indexOf(task);
  }

  add(data: {
    title: string;
    description: string;
    classTag: ClassTag;
    dueDate: Date;
    dueTime: Time;
  }) {
    let task = new Task(data);
    let id = this.tasks.push(task) - 1;

    this.save();
    return id;
  }

  update(
    id: number,
    data: {
      title: string;
      description: string;
      classTag: ClassTag;
      dueDate: Date;
      dueTime: Time;
    }
  ) {
    let task = this.tasks[id];
    task.title = data.title;
    task.description = data.description;
    task.classTag = data.classTag;
    task.dueDate = data.dueDate;
    task.dueTime = data.dueTime;

    this.save();
  }

  delete(id: number) {
    this.tasks.splice(id, 1);

    this.save();
  }
}
