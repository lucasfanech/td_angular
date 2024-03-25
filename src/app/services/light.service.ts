import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LightService {
  private lightArray: any[] = [
    {
      id: 1,
      toggled: false,
      title: 'Light 1',
      color: '#f6b73c'
    },
    {
      id: 2,
      toggled: true,
      title: 'Light 2',
      color: '#f6b73c'
    },
    {
      id: 3,
      toggled: false,
      title: 'Light 3',
      color: '#f6b73c'
    },
    {
      id: 4,
      toggled: true,
      title: 'Light 4',
      color: '#f6b73c'
    },
    {
      id: 5,
      toggled: false,
      title: 'Light 5',
      color: '#f6b73c'
    }
  ];

  private nextId = 6;
  constructor(private httpClient: HttpClient) {
    this.refreshLights();
  }

  refreshLights(){
    this.httpClient.get('api/lights').subscribe((lights: any) => {
      this.lightArray = lights;
    })
  }
  getAllLights() {
    return this.lightArray;
  }

  addLight(lightSent: any){
    let light = {
      id : this.nextId,
      toggled: false,
      title: lightSent.name,
      color: lightSent.color
    };
    this.lightArray.push(light);
    this.nextId++;
  }

  removeLight(id: number){
    this.lightArray = this.lightArray.filter(light => light.id !== id);

  }
}
