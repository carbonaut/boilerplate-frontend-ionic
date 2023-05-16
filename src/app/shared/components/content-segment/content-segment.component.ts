import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContentSegmentOption } from './content-segment.interface';

/** @ignore */
@Component({
  selector: 'app-content-segment',
  templateUrl: './content-segment.component.html',
  styleUrls: ['./content-segment.component.scss'],
})
export class ContentSegmentComponent {
  @Input() options: ContentSegmentOption[];

  @Input() scrollable: boolean;

  @Input() value: string;

  @Output() valueChange = new EventEmitter();

  onChange(event) {
    this.valueChange.emit(event.detail.value);
  }
}
