import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContentSegmentOption } from './content-segment.interface';
import { SegmentCustomEvent } from '@ionic/core';

/** @ignore */
@Component({
  selector: 'app-content-segment',
  templateUrl: './content-segment.component.html',
  styleUrls: ['./content-segment.component.scss'],
})
export class ContentSegmentComponent {
  @Input() options!: ContentSegmentOption[];

  @Input() scrollable: boolean = false;

  @Input() value!: string;

  @Output() valueChange = new EventEmitter();

  onChange(event: SegmentCustomEvent) {
    this.valueChange.emit(event.detail.value);
  }
}
