import { Injectable } from '@angular/core';
import { FigureFilesService } from './figure-files.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private numberOfPlays = 0;
  private numberOfPlaysWithTwoEqualImages = 0;
  private numberOfPlaysWithThreeEqualImages = 0;
  private numberOfPlaysWithFourEqualImages = 0;
  private numberOfPlaysWithFiveEqualImages = 0;
  private setOfImagesMap = new Map();

  constructor(private figureFilesService : FigureFilesService) {
    let files = this.figureFilesService.listFigures();
    files.forEach((file : string) => {
      this.setOfImagesMap.set(file, 0);
    })
   }

  public updateCounters(images: Array<string>) {
    images.forEach((imageName : string) => {
      this.setOfImagesMap.set(
        imageName, 
        this.setOfImagesMap.get(imageName) + 1)
    });
    this.numberOfPlays++;
    this.sumValues();
  }

  private sumValues(){
    let values : Array<any> = Array.from(this.setOfImagesMap.values());
    values.forEach((value : number) => {
      switch(value){
        case 2:
          this.numberOfPlaysWithTwoEqualImages++;
          break;
          case 3:
          this.numberOfPlaysWithThreeEqualImages++;
          break;
          case 4:
          this.numberOfPlaysWithFourEqualImages++;
          break;
          case 5:
          this.numberOfPlaysWithFiveEqualImages++;
          break;
      }
    });
    this.cleanMap();
  }

  private cleanMap() {
    let keys = Array.from(this.setOfImagesMap.keys());
      keys.forEach((key: string) => {
        this.setOfImagesMap.set(key, 0);
      });
    }

  public getNumberOfPlays() {
    return this.numberOfPlays;
  }

  public getNumberOfPlaysWith2EqualImages() {
    return this.numberOfPlaysWithTwoEqualImages;
  }

  public getNumberOfPlaysWith3EqualImages() {
    return this.numberOfPlaysWithThreeEqualImages;
  }

  public getNumberOfPlaysWith4EqualImages() {
    return this.numberOfPlaysWithFourEqualImages;
  }

  public getNumberOfPlaysWith5EqualImages() {
    return this.numberOfPlaysWithFiveEqualImages;
  }
}
