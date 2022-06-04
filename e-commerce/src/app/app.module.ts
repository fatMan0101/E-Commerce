import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrandsComponent } from './brands/brands.component';
import { FormsModule } from "@angular/forms";
import { ProductComponent } from './product/product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouseModule } from './carouse/carouse.module';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BrandsComponent,
    ProductComponent,
    ProductMenuComponent,
    HomeComponent,
    FooterComponent,
    SocialMediaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CarouselModule,
    CarouseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
