import { Component } from '@angular/core';
import { NgFor, NgClass, NgStyle } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-cholon-forever',
  imports: [NgFor, NgClass, NgStyle, FooterComponent],
  templateUrl: './cholon-forever.component.html',
  styleUrl: './cholon-forever.component.css'
})
export class CholonForeverComponent {

  images = [
    'assets/images/cholon/cholon forever 1.jpg',
    'assets/images/cholon/cholon forever 2 (1).jpg',
    'assets/images/cholon/IMG_2653.JPG',
    'assets/images/cholon/WhatsApp Image 2024-03-17 at 2.32.05 PM (2).jpeg',
    'assets/images/cholon/WhatsApp Image 2024-03-17 at 2.32.05 PM (3).jpeg',
    'assets/images/cholon/WhatsApp Image 2024-03-17 at 2.32.05 PM.jpeg'
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
