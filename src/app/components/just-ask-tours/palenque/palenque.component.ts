import { Component } from '@angular/core';
import { NgFor, NgClass, NgStyle } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-palenque',
  imports: [NgFor, NgClass, NgStyle, FooterComponent],
  templateUrl: './palenque.component.html',
  styleUrl: './palenque.component.css'
})
export class PalenqueComponent {
  images = [
    'assets/images/palenque/IMG_4661.JPG',
    'assets/images/palenque/IMG_4662.JPG',
    'assets/images/palenque/IMG_4663 (1).JPG',
    'assets/images/palenque/IMG_4664.JPG',
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
