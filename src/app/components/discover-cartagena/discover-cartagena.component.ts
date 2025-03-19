import { Component } from '@angular/core';

@Component({
  selector: 'app-discover-cartagena',
  imports: [],
  templateUrl: './discover-cartagena.component.html',
  styleUrl: './discover-cartagena.component.css'
})
export class DiscoverCartagenaComponent {
  openWhatsApp() {
    const phoneNumber = '+573044214260';
    const message = encodeURIComponent('Hello! I need some information about your tours!'); // Optional message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

}
