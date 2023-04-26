import { Time } from '@angular/common';

export class Class {
  public name: string;
  public days: string[];
  public startTime: Time;
  public endTime: Time;

  constructor(data: {
    name: string;
    days: string[];
    startTime: Time;
    endTime: Time;
  }) {
    this.name = data.name;
    this.days = data.days;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
  }
}
