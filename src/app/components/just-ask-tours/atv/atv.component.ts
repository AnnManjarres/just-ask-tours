import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { NgFor, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-atv',
  imports: [FooterComponent, NgFor, NgClass, NgStyle],
  templateUrl: './atv.component.html',
  styleUrl: './atv.component.css'
})
export class AtvComponent {
  images = [
    'assets/images/atv/IMG_4090_(1).jpg',
    'assets/images/atv/IMG_4111.jpg',
    'assets/images/atv/IMG_4112.jpg',
    'assets/images/atv/IMG_4136.jpg',
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
