import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  domain: any = 'https://';
  products: any[] = [
    {
      id: 1,
      name: 'social Lender',
      icon: 'assets/products/sl.jpg',
      about: `Social Lender is a lending solution based on social reputation on mobile, 
      online and social media platforms. Social Lender is designed to bridge the gap 
      of immediate fund access for people with limited access to formal credit. 
      Social Lender uses its own proprietary algorithm to perform a social audit 
      of the user on social media, online and other related platforms and gives 
      a Social Reputation Score to each user. Loans are guaranteed by the user’s 
      social profile and network allowing users to then borrow from banks and other 
      financial institutions based on their social reputation`,
      channels: {
          facebook: `${this.domain}facebook.com/sociallender`,
          twitter: `${this.domain}twitter.com/sociallender`,
          instagram: `${this.domain}instagram.com/socaillender`,
          blog: `${this.domain}blog.sociallender.com`,
      }
    },
    {
      id: 2,
      name: 'Bincom ICT',
      icon: 'assets/products/bincom.jpg',
      about: `Bincom ICT Solutions is a fast growing Information 
      Communication Technology (ICT) Solutions Corporation`,
      channels: {
        facebook: `${this.domain}facebook.com/bincom`,
        twitter: `${this.domain}twitter.com/bincom`,
        instagram: `${this.domain}instagram.com/socaillender`,
        linkedin: `${this.domain}linkedin.com/company/bincomictsolutions`,
        website: `${this.domain}bincom.net`
      }
    },
    {
      id: 3,
      name: 'Bincom Dev Center',
      icon: 'assets/products/bincom.jpg',
      about: `Bincom Dev Center is the Training & Development Arm of Bincom ICT (www.bincom.net).
      Bincom Dev Center has a vision to produce 1,000 high quality tech professionals every year.`,
      channels: {
        facebook: `${this.domain}facebook.com/bincomdevcenter`,
        twitter: `${this.domain}twitter.com/bincomDevcenter`,
        instagram: `${this.domain}instagram.com/bincomdevcenter_`,
        linkedin: `${this.domain}linkedin.com/company/bincomdevcenter`,
        blog: `${this.domain}blog.bincom.net`,
      }
    },
    {
      id: 4,
      name: 'My circle',
      icon: 'assets/products/mycircle.jpg',
      about: `MyCircle is an organization built on a network community of people 
      influencing the society through innovations and strategic approaches. 
      It is both an online and offline platform for advertising and promoting 
      your favorite brands thereby enhancing job opportunities`,
      channels: {
        facebook: `${this.domain}facebook.com/mycircleng`,
        twitter: `${this.domain}twitter.com/mycircleng`,
        instagram: `${this.domain}instagram.com/Mycircleng`,
      }
    },
    {
      id: 5,
      name: 'Eden',
      icon: 'assets/products/eden.jpg',
      about: `EDEN is a Christian Lifestyle + Entertainment Ministry.  <br>
      The driving principle behind the organisation is to consolidate the Kingdom 
      of our God by effective soul keeping and soul winning in tackling 
      the perception that Christians have a boring lifestyle.
      `,
      channels: {
        facebook: `${this.domain}facebook.com/edennigeria`,
        twitter: `${this.domain}twitter.com/edennigeria`,
        instagram: `${this.domain}instagram.com/edennigeria`,
      }
    },
    {
      id: 6,
      name: 'Light Space',
      icon: 'assets/products/mycircle.jpg',
      about: `We provide you with quality, affordable and comfortable 
      space for your events, co-working space and guest house.`,
      channels: {
        facebook: `${this.domain}facebook.com/edennigeria`,
        twitter: `${this.domain}twitter.com/edennigeria`,
        instagram: `${this.domain}instagram.com/edennigeria`,
      }
    },
    {
      id: 7,
      name: 'Faithress',
      icon: 'assets/products/faithress.jpg',
      about: ``,
      channels: {
        facebook: `${this.domain}facebook.com/edennigeria`,
        twitter: `${this.domain}twitter.com/edennigeria`,
        instagram: `${this.domain}instagram.com/edennigeria`,
      }
    },
    {
      id: 8,
      name: 'BadeSemowo Fundation',
      icon: 'assets/products/mycircle.jpg',
      about: '',
      channels: {
        facebook: `${this.domain}facebook.com/edennigeria`,
        twitter: `${this.domain}twitter.com/edennigeria`,
        instagram: `${this.domain}instagram.com/edennigeria`,
      }
    },
  ];

  socialModal = new Subject<boolean>();

  constructor() { }
  getSocialChannels(id: number) {
    try {
      const getProduct = this.products.find(
        data => data.id === id
      );
      if (getProduct === undefined || getProduct === null) {
        console.log('Data Not found on mylist');
        return false;
      } else {
        console.log('found', getProduct);
        return getProduct;
      }
    } catch (err) {
      console.log(err);
    }

  }
  openSocialModal() {
    this.socialModal.next(true);
  }
  getStateOfSocialModal() {
    return this.socialModal.asObservable();
  }
  closeSocialModal() {
    this.socialModal.next(false);
  }
}
