import { Injectable } from '@angular/core';
import { ClassTag } from './class-tag';

@Injectable({
  providedIn: 'root',
})
export class ClassTagsService {
  static get(value: string) {
    throw new Error('Method not implemented.');
  }
  tags: { [key: string]: ClassTag } = {};

  constructor() {
    this.load();

    this.set(
      'IT 240',
      new ClassTag({
        name: 'IT 240',
        lightColor: '#bee0cc',
        darkColor: '#2b5538',
      })
    );
    this.set(
      'POSC 225',
      new ClassTag({
        name: 'POSC 225',
        lightColor: '#e0d5be',
        darkColor: '#614e28',
      })
    );
  }

  save() {
    localStorage.setItem('classTags', JSON.stringify(this.tags));
  }

  load() {
    if (localStorage.hasOwnProperty('classTags')) {
      this.tags = JSON.parse(localStorage.getItem('classTags')!);
      console.log('Loaded ' + Object.keys(this.tags).length + ' class tag(s)');
    } else {
      console.log('No tag data found');
    }
  }

  get(name: string) {
    return this.tags[name];
  }

  set(name: string, tag: ClassTag) {
    this.tags[name] = tag;
    this.save();
  }

  delete(name: string) {
    delete this.tags[name];
    this.save();
  }
}
