import { NgFor, NgClass, NgStyle } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mamo',
  imports: [NgFor, NgClass, NgStyle, FooterComponent],
  templateUrl: './mamo.component.html',
  styleUrl: './mamo.component.css'
})
export class MamoComponent {
  images = [
    'assets/images/mamo/Mambo Beach 2.JPG',
    'assets/images/mamo/Mambo Beach.JPG',
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
