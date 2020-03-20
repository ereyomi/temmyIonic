import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';

import {
  faTwitterSquare,
  faLinkedin,
  faFacebookSquare,
  faInstagram,
  faTelegram,
  faYoutube,
  faLinkedinIn,
  faFirefoxBrowser,
  faEdge,
  faChrome} from '@fortawesome/free-brands-svg-icons';
import { SocialsService } from 'src/app/services/socials.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-socialmedia-page',
  templateUrl: './socialmedia-page.component.html',
  styleUrls: ['./socialmedia-page.component.scss'],
})
export class SocialmediaPageComponent implements OnInit, OnDestroy {
  @Input() passedInData: any;

  facebook: any = faFacebookSquare;
  twitter: any = faTwitterSquare;
   linkedin: any = faLinkedinIn;
   linkedind: any = faLinkedin;
   linkedinin: any = faLinkedinIn;
    instagram: any = faInstagram;
    telegram: any = faTelegram;
    youtube: any = faYoutube;
    blog: any = faBlog;
    website: any = faEdge;

  objectkeys = Object.keys;
  private subscription: Subscription;
  modalState: any;
  constructor(private socialService: SocialsService) {

    this.subscription = this.socialService.socialModal.subscribe(data => {
      this.modalState = data;
      console.log(this.modalState);
    });

  }

  ngOnInit() {
      console.log('passedin: ', this.passedInData);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  gotoLink(link) {
    console.log(link);
  }
  closeSocial() {
    this.socialService.closeSocialModal();
  }
  redirectMe(link) {
    window.open(`${link}`, '_blank');
  }

}
