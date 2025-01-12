import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SrComponent } from '../../block/sr/sr.component';
import { AdvantagesComponent } from '../../block/advantages/advantages.component';
import { DiscountComponent } from '../../block/discount/discount.component';
import { ServicesComponent } from '../../block/our-services/services.component';
import { TeamComponent } from "../../block/team/team.component";
import { StudioComponent } from "../../block/studio/studio.component";
import { ExamplesComponent } from "../../block/examples/examples.component";
import { LessonsComponent } from "../../block/lessons/lessons.component";
import { FeedbackComponent } from "../../block/feedback/feedback.component";
import { FaqComponent } from '../../block/faq/faq.component';

@Component({
  standalone: true,
  selector: 'home-page',
  imports: [
    HeaderComponent,
    SrComponent,
    AdvantagesComponent,
    DiscountComponent,
    ServicesComponent,
    TeamComponent,
    StudioComponent,
    ExamplesComponent,
    LessonsComponent,
    FeedbackComponent,
    FaqComponent,
    FooterComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
