import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { NgFor, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-borabora',
  imports: [FooterComponent, NgFor, NgClass, NgStyle],
  templateUrl: './borabora.component.html',
  styleUrl: './borabora.component.css'
})
export class BoraboraComponent {

  images = [
    'assets/images/borabora/Bora Bora Vip (1).jpg',
    'assets/images/borabora/Bora Bora Vip 2.jpg',
    'assets/images/borabora/Bora Bora Vip DJ.jpg',
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
