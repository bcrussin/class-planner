import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ClassTag } from '../shared/class-tags/class-tag';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  description: string;
  @Input()
  className?: string;
  @Input()
  tagLightColor?: string;
  @Input()
  tagDarkColor?: string;
  @Input()
  link: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('titleElem') titleElem: ElementRef<HTMLHeadingElement>;
  @ViewChild('tagElem') tagElem: ElementRef<HTMLDivElement>;
  @ViewChild('cardElem') cardElem: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Class Tag Name
    if (this.className === null || this.className === undefined) {
      this.tagElem.nativeElement.style.display = 'none';
    } else {
      this.tagElem.nativeElement.innerHTML = this.className;

      // Update tag colors if present
      if (this.tagLightColor !== undefined && this.tagDarkColor !== undefined) {
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', (event) => {
            this.updateTagColor();
          });

        this.updateTagColor();
      }
    }

    /*let tagWidth = this.tagElem.nativeElement.clientWidth;
    let cardWidth = this.cardElem.nativeElement.clientWidth;

    this.titleElem.nativeElement.style.maxWidth =
      'calc(' + cardWidth + 'px - 70px - ' + tagWidth + 'px)';*/
  }

  updateTagColor() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.tagElem.nativeElement.style.backgroundColor = this.tagDarkColor!;
    } else {
      this.tagElem.nativeElement.style.backgroundColor = this.tagLightColor!;
    }
  }

  onDeleteClick() {
    this.deleteEvent.emit();
  }

  onCardClick() {
    this.router.navigate([this.link]);
  }

  onTagClick(e: Event) {
    e.stopPropagation();
    alert(this.className);
  }
}
