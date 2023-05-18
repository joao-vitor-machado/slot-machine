import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FigureFilesService {

  private files : Array<string> = [
    '../../assets/slot_machine_figures/croc.png',
    '../../assets/slot_machine_figures/elephant.png',
    '../../assets/slot_machine_figures/flamingo.png',
    '../../assets/slot_machine_figures/fox.png',
    '../../assets/slot_machine_figures/horse.png',
    '../../assets/slot_machine_figures/pig.png',
    '../../assets/slot_machine_figures/panda.png',
    '../../assets/slot_machine_figures/rabbit.png',
    '../../assets/slot_machine_figures/sheep.png',
    '../../assets/slot_machine_figures/tiger.png'
  ];

  constructor() {}

  listFigures(){
    return this.files
}
}
