import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SocialsService } from 'src/app/services/socials.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit, OnChanges, OnDestroy {

  product: any;
  mydata: any = null;
  openSocial = false;
  private subscription: Subscription;
  loading: boolean;
  productId: number;
  products: any[];
  pId: number;
  constructor(private socialService: SocialsService, private router: Router, private route: ActivatedRoute) { }
  ngOnChanges() {
    this.getParamsAndGetSocial();
  }
  ngOnInit() {
    this.getParamsAndGetSocial();
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  getParamsAndGetSocial() {
    console.log(this.socialService.products);
    this.products = this.socialService.products;
    this.productId = 1;
    this.product = this.getSocial(this.productId);
    // this.socialService.socialModal.subscribe(data => console.log(data));
    /* this.route.params.subscribe(
      (params: Params) => {
        this.productId = +params.id;
        console.log('productId: ', this.productId);
        // set loading till we get a content
        this.loading = true;
        if (!isNaN(this.productId)  && typeof this.productId !== null) {
          this.product = this.getSocial(this.productId);
        } else {
          console.log('i didnt get productId');
        }
      }
    ); */
  }
  getSocial(id: number) {
    console.log('social id: ', id);
    return this.socialService.getSocialChannels(id);
  }

  showSocial(id: number) {
    this.getSocial(id);
    this.socialService.openSocialModal();
    // this.router.navigate(['social']);
  }
  handleSwipeRight(ev) {
    console.log(ev.type);
    this.pId = this.productId;
    ((this.productId <= this.products.length) && (this.productId !== 1)) ? (this.pId = --this.productId, this.product = this.getSocial(this.pId)): '';
  }
  handleSwipeLeft(ev) {
    console.log(ev.type);
    this.pId = this.productId;
    ((this.productId < this.products.length)) ? (this.pId = ++this.productId, this.product = this.getSocial(this.pId)) : '';
    // this.router.navigate(['products', this.pId])
  }

}
