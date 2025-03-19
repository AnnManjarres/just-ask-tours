import { Component } from '@angular/core';
import { NgFor, NgClass, NgStyle } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-cinco-islas',
  imports: [NgFor, NgClass, NgStyle, FooterComponent],
  templateUrl: './cinco-islas.component.html',
  styleUrl: './cinco-islas.component.css'
})
export class CincoIslasComponent {
  images = [
    'assets/images/cincoislas/5 Islas Vip 1.JPG',
    'assets/images/cincoislas/5 Islas Cholon.JPG',
    'assets/images/cincoislas/5 Islas Vip 2.JPG',
    'assets/images/cincoislas/5 Islas Vip.JPG',
    'assets/images/cincoislas/Encantaada beach 2.JPG',
    'assets/images/cincoislas/encantada beach.jpg',
    'assets/images/cincoislas/IMG_2648 (1).JPG',
    'assets/images/cincoislas/IMG-20211130-WA0209 (1).jpg'
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
