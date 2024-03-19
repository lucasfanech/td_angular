import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {LightComponent} from "../light/light.component";

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

  lightArray: any = [
    {
      toggled: false,
      title: 'Light 1'
    },
    {
      toggled: true,
      title: 'Light 2'
    },
    {
      toggled: false,
      title: 'Light 3'
    },
    {
      toggled: true,
      title: 'Light 4'
    },
    {
      toggled: false,
      title: 'Light 5'
    }
  ];

}
