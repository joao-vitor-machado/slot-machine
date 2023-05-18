import { Component, QueryList, ViewChildren } from '@angular/core';
import { FigureComponent } from './components/figure/figure.component';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private currentImages : Array<string> = [];
  @ViewChildren(FigureComponent) imgs! : QueryList<FigureComponent>;

  constructor(public counterService : CounterService) {}
  
  public runSlotMachine() {
    this.currentImages = [];
    this.imgs.forEach(image => {
      image.raffle()
    });
    this.updateImages();
  }

  private updateImages() {
    this.imgs.forEach(image => {
      this.currentImages.push(image.content);
    });
    this.counterService.updateCounters(this.currentImages);
  }

}
