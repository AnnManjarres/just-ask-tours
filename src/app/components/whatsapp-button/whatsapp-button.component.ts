import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {
  openWhatsApp() {
    const phoneNumber = '+573044214260';
    const message = encodeURIComponent('Hello! I need some information about your tours!'); // Optional message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

}
