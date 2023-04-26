import { Time } from '@angular/common';
import { ClassTag } from './class-tags/class-tag';

export class Task {
  public title: string;
  public classTag: ClassTag;
  public description: string;

  public dueDate: Date;
  public dueTime: Time;

  constructor(data?: {
    title: string;
    classTag: ClassTag;
    description: string;
    dueDate: Date;
    dueTime: Time;
  }) {
    if (data === undefined) {
      this.title = '';
      this.description = '';
    } else {
      this.title = data.title;
      this.classTag = data.classTag;
      this.description = data.description;

      this.dueDate = data.dueDate;
      this.dueTime = data.dueTime;
    }
  }
}
