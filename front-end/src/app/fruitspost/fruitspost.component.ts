import { Component } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
  
  
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-fruitspost',
  templateUrl: './fruitspost.component.html',
  styleUrls: ['./fruitspost.component.css']
})
export class FruitspostComponent {
  homeicon = faLocationDot;
  emailicon = faEnvelope;
  phoneicon = faPhone;
  facebookicon = faFacebookSquare;
  tweetrericon = faTwitterSquare;
  pinteresticon = faPinterestSquare;
  instagramicon = faInstagramSquare;
}
