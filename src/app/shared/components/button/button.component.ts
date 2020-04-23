import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size: 'lg' | 'sm' | '';
  @Input('clear') isClear: boolean;
  @Input('outline') isOutline: boolean;
  @Input('inverted') isInverted: boolean;
  @Input('arrow') hasArrow: boolean;

  @Input() icon: string;
  @Input() type: boolean;
  @Input() loading: boolean;
  @Input() disabled: boolean;

  @Output() click = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick($event) {
    this.click.emit($event);
  }
}
