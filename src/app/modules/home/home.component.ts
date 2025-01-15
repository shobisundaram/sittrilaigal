import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
