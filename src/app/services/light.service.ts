import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightService {
  private lightArray: any[] = [
    {
      id: 1,
      toggled: false,
      title: 'Light 1'
    },
    {
      id: 2,
      toggled: true,
      title: 'Light 2'
    },
    {
      id: 3,
      toggled: false,
      title: 'Light 3'
    },
    {
      id: 4,
      toggled: true,
      title: 'Light 4'
    },
    {
      id: 5,
      toggled: false,
      title: 'Light 5'
    }
  ];

  private nextId = 6;
  constructor() { }

  getAllLights() {
    return this.lightArray;
  }

  addLight(){
    let light = {
      id : this.nextId,
      toggled: false,
      title: 'Light ' + (this.lightArray.length + 1)
    };
    this.lightArray.push(light);
    this.nextId++;
  }

  removeLight(id: number){
    this.lightArray = this.lightArray.filter(light => light.id !== id);

  }
}
