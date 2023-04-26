import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClassTag } from 'src/app/shared/class-tags/class-tag';
import { ClassTagsService } from 'src/app/shared/class-tags/class-tags.service';
import { TagColors } from 'src/app/shared/class-tags/tag-colors';
import { Task } from 'src/app/shared/task.model';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  @ViewChild('classTagSelector')
  classTagSelector: ElementRef<HTMLSelectElement>;

  task: Task;
  taskId: number;
  isNew: boolean;

  constructor(
    private tasksService: TasksService,
    private tagsService: ClassTagsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.task = new Task();

      if (params['id']) {
        this.task = this.tasksService.get(params['id']);
        console.log('ID: ' + params['id']);
        console.log(this.tasksService.get(params['id']));
        this.taskId = params['id'];
        this.isNew = false;
      } else {
        this.isNew = true;
      }
    });
  }

  ngAfterViewInit(): void {
    this.setClassBackground(this.classTagSelector.nativeElement);
  }

  onSubmit(form: NgForm) {
    if (this.isNew) {
      let index = this.tasksService.add({
        title: form.value.title,
        description: form.value.description,
        classTag: this.tagsService.get(form.value.classTag),
      });
      console.log('Added: ' + index);
    } else {
      this.tasksService.update(this.taskId, {
        title: form.value.title,
        description: form.value.description,
        classTag: this.tagsService.get(form.value.classTag),
      });
    }

    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  onClassSelect(event: Event) {
    //alert(this.classTagSelector.nativeElement.value);
    if (this.classTagSelector.nativeElement.value == '') {
      this.classTagSelector.nativeElement.style.boxShadow = 'none';
    } else {
      this.setClassBackground(this.classTagSelector.nativeElement);
    }
  }

  setClassBackground(element: HTMLSelectElement) {
    let tag =
      element.value == ''
        ? this.task.classTag
        : this.tagsService.get(element.value);

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        element.style.boxShadow = this.getBoxShadow(tag);
      });

    //target.style.backgroundColor = this.getTagColor(tag);
    element.style.boxShadow = this.getBoxShadow(tag);
  }

  getBoxShadow(tag: ClassTag) {
    let color: string;

    if (tag === undefined) {
      return 'none';
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      color = tag.darkColor;
    } else {
      color = tag.lightColor;
    }

    return 'inset 0 0 100px ' + color;
  }
}
