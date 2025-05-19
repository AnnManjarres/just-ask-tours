import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {
  openWhatsApp() {
    const phoneNumber = '+573012036505';
    const message = encodeURIComponent('Alex I am coming to Cartagena and want to book with you!'); // Optional message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

}
