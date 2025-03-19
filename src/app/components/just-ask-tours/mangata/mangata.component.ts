import { Component } from '@angular/core';
import { NgFor, NgClass, NgStyle } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-mangata',
  imports: [NgFor, NgClass, NgStyle, FooterComponent],
  templateUrl: './mangata.component.html',
  styleUrl: './mangata.component.css'
})
export class MangataComponent {
  images = [
    'assets/images/mangata/IMG_3095.JPG',
    'assets/images/mangata/IMG_3096.JPG',
    'assets/images/mangata/IMG_3101 (1).JPG',
    'assets/images/mangata/IMG_3106.JPG',
    'assets/images/mangata/IMG_3107.JPG',
    'assets/images/mangata/IMG_3109.JPG',
    'assets/images/mangata/IMG_3110.JPG',
    
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
