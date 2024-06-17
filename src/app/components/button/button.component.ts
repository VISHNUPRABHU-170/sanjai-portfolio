import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModel } from './button.model';
import { OutputEventModel } from 'src/app/models/output-event.model';
import { EventType } from '../../constants/event';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() config!: ButtonModel;
  @Output() event: EventEmitter<OutputEventModel> = new EventEmitter();

  handleCLick() {
    const eventData: OutputEventModel = {
      eventType: EventType.ON_CLICK,
      event: this.config
    }
    this.event.emit(eventData);
  }

  onMouseEnter() {
    if (this.config.icon) {
      this.config.icon.name = "download-white"
    }
  }

  onMouseLeave() {
    if (this.config.icon) {
      this.config.icon.name = "download-black";
    }
  }
}
