import { Component } from '@angular/core';
import { NgFor, NgClass, NgStyle } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-fenix',
  imports: [NgFor, NgClass, NgStyle, FooterComponent],
  templateUrl: './fenix.component.html',
  styleUrl: './fenix.component.css'
})
export class FenixComponent {
  images = [
    'assets/images/fenix/IMG_2724.JPG',
    'assets/images/fenix/IMG_2725 (1).JPG',
    'assets/images/fenix/IMG_2727 (1).JPG',
    'assets/images/fenix/IMG_2728.JPG',
    'assets/images/fenix/IMG_2729.JPG',
    'assets/images/fenix/IMG_2730.JPG',
    'assets/images/fenix/IMG_2731.JPG',
    'assets/images/fenix/IMG_2732.JPG',
    'assets/images/fenix/IMG_2733.JPG',
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Auto slide every 3 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
