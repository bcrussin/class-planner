import { Injectable } from '@angular/core';
import { Class } from './class';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  classes: { [key: string]: Class } = {};

  constructor() {}

  save() {
    localStorage.setItem('classes', JSON.stringify(this.classes));
  }

  load() {
    if (localStorage.hasOwnProperty('classes')) {
      this.classes = JSON.parse(localStorage.getItem('classes')!);
      console.log('Loaded ' + Object.keys(this.classes).length + ' classes(s)');
    } else {
      console.log('No class data found');
    }
  }

  get(name: string) {
    return this.classes[name];
  }

  set(name: string, classObj: Class) {
    this.classes[name] = classObj;
  }
}
