import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    NgbCarouselModule 
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.sass'
})
export class CarouselComponent implements OnInit {
  
  slides = [
    { url: 'assets/images/agaram_slider-s1.webp', title: 'Slide 1' },
    { url: 'assets/images/agaram_slider-s2.webp', title: 'Slide 2' }
  ];

  items = [
    { icon: 'fa-solid fa-hand-holding-heart', label: 'Donate' },
    { icon: 'fa-solid fa-users', label: 'Volunteer' },
    { icon: 'fa-solid fa-microphone', label: 'Founder Call' },
  ];
  ngOnInit() {
  }
}
