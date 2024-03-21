import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-light',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './light.component.html',
  styleUrl: './light.component.css'
})
export class LightComponent {

  @Input('lightInput')
  light: any = {
    toggled: false,
    title: 'UNKNOWN'
  }

  @Output("trigger")
  trigger: EventEmitter<any> = new EventEmitter<any>();


  switchLight(lightObject: any) {
    lightObject.toggled = !lightObject.toggled;
  }

  launchTrigger(){
    this.trigger.emit();
  }
}
