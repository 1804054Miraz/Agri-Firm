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
  selector: 'app-flowerspost',
  templateUrl: './flowerspost.component.html',
  styleUrls: ['./flowerspost.component.css']
})
export class FlowerspostComponent {
  homeicon = faLocationDot;
  emailicon = faEnvelope;
  phoneicon = faPhone;
  facebookicon = faFacebookSquare;
  tweetrericon = faTwitterSquare;
  pinteresticon = faPinterestSquare;
  instagramicon = faInstagramSquare;

}
