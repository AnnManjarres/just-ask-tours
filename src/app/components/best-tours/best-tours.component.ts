import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-best-tours',
  imports: [NgIf, RouterModule],
  templateUrl: './best-tours.component.html',
  styleUrl: './best-tours.component.css'
})
export class BestToursComponent {
  toggleTours:boolean = false;


  toggleAllTours() {
    this.toggleTours = !this.toggleTours
  }

}
