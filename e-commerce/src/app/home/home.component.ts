import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc:'https://www.webtekno.com/images/editor/default/0002/91/2200c425b0ef3d109b74b3cfad4667a1249c4303.jpeg',
      imageAlt:'slide1',
    },
    {
      imageSrc:'https://i0.wp.com/shiftdelete.net/wp-content/uploads/2017/10/online-shopping-ecommerce-ss-1920-1.png?fit=580%2C330&ssl=1',
      imageAlt:'slide2',
    },
    {
      imageSrc:'https://hthayat.haberturk.com/im/2020/05/18/ver1644128592/1074002_620x360.jpg',
      imageAlt:'slide1',
    },
    {
      imageSrc:'https://i0.wp.com/www.grisayfalar.com/wp-content/uploads/2021/07/android-icin-en-iyi-alisveris-uygulamalari.jpg',
      imageAlt:'slide1',
    }
  ]
}
