import {Component, Input} from '@angular/core';
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


  switchLight(lightObject: any) {
    lightObject.toggled = !lightObject.toggled;
  }
}
