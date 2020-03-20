import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SocialmediaPageComponent } from './pages/socialmedia-page/socialmedia-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialsService } from './services/socials.service';
/* import { library } from '@fortawesome/fontawesome-svg-core'; */
/* import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'; */

/* library.add(fas, far, fab); */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { ProductComponent } from './pages/products-page/product/product.component';

export class CustomHammerConfig extends HammerGestureConfig{
  overrides = {
    'swipe': {
      velocity: 0.4,
      threshold: 20
    }
    /* 'pan': {
      direction: Hammer.DIRECTION_ALL
    } */
  } as any;
}
@NgModule({
  declarations: [AppComponent, LoginPageComponent, ProductsPageComponent,ProductComponent, SocialmediaPageComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule],
  providers: [
    AuthService,
    SocialsService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
