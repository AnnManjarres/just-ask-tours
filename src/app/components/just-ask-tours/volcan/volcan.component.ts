import { Component } from '@angular/core';
import { NgFor, NgClass, NgStyle } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-volcan',
  imports: [NgFor, NgClass, NgStyle, FooterComponent],
  templateUrl: './volcan.component.html',
  styleUrl: './volcan.component.css'
})
export class VolcanComponent {
  images = [
    'assets/images/volcan/WhatsApp Image 2024-03-19 at 10.37.41 PM.jpeg',
    'assets/images/volcan/WhatsApp Image 2024-03-19 at 10.37.43 PM.jpeg',
    'assets/images/volcan/IMG_4775.JPG',
    'assets/images/volcan/IMG_3746.JPG',
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
