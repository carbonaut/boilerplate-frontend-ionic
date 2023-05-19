import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { ToastMessage } from '../../services/toast-service/toast-service.interface';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
})
export class ToastMessageComponent implements OnInit {
  @Input() toast!: ToastMessage;

  @Output() clicked = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.setProperty('--toast-message-duration', `${this.toast.animationDuration}ms`);
  }

  handleClick(ev: MouseEvent) {
    this.clicked.emit(ev);
  }
}
