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
    'assets/images/cholon/IMG_2876.JPG',
    'assets/images/cholon/IMG_9617.JPG',
    'assets/images/cholon/452759091_17891462886052356_8214747555860914251_n..jpg',
    'assets/images/cholon/452872868_17891462904052356_3726858202432339895_n..jpg',
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
