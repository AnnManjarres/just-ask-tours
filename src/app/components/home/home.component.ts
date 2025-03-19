import { Component } from '@angular/core';
import { ActionComponent } from "../action/action.component";
import { WhyChooseUsComponent } from "../why-choose-us/why-choose-us.component";
import { BestToursComponent } from "../best-tours/best-tours.component";
import { DiscoverCartagenaComponent } from "../discover-cartagena/discover-cartagena.component";
import { JustAskAlexComponent } from "../just-ask-alex/just-ask-alex.component";
import { WhatsappButtonComponent } from '../whatsapp-button/whatsapp-button.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, ActionComponent, WhyChooseUsComponent, BestToursComponent, DiscoverCartagenaComponent, JustAskAlexComponent, WhatsappButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
