import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {LightComponent} from "../light/light.component";
import {LightService} from "../../services/light.service";

@Component({
  selector: 'app-lightpage',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    LightComponent
  ],
  templateUrl: './lightpage.component.html',
  styleUrl: './lightpage.component.css'
})
export class LightpageComponent {

  constructor(protected lightService: LightService) {}

  handleTrigger(id: number){
    this.lightService.removeLight(id);
  }
}
