import { Component, OnInit } from '@angular/core';
import { WhatsappComponent } from '../whatsapp/whatsapp.component';

@Component({
  selector: 'app-all-tours',
  imports: [WhatsappComponent],
  templateUrl: './all-tours.component.html',
  styleUrl: './all-tours.component.css'
})
export class AllToursComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0, 0); // Force scroll to top on component load
  }

}
