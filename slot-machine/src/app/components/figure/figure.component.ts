import { Component, OnInit } from '@angular/core';
import { FigureFilesService } from 'src/app/services/figure-files.service';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {

  content : string = '?'

  constructor(private figureListService : FigureFilesService) { }

  ngOnInit(): void {
  }

  raffle() {
    let listOfigures = this.figureListService.listFigures();
    let randomIndex = Math.floor(Math.random() * (5 - 0) + 0);
    this.content = listOfigures[randomIndex];
  }

}
