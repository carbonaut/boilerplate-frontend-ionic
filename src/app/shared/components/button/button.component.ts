import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size: 'lg' | 'sm' | '' = '';

  @Input('clear') isClear: boolean = false;

  @Input('outline') isOutline: boolean = false;

  @Input('inverted') isInverted: boolean = false;

  @Input('arrow') hasArrow: boolean = false;

  @Input() icon: string | null = null;

  @Input() loading: boolean = false;

  @Input() disabled: boolean = false;

  ngOnInit() {}
}
