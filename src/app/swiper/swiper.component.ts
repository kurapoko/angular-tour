import { Component, Input, OnInit } from '@angular/core';

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper/core';


SwiperCore.use([Navigation, Pagination, A11y]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  @Input() slidesPerView: number;

  /* スライダー内のテキスト */
  @Input() swiperList: {title: string}[];

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper) {
    console.log(swiper)
  }
  onSlideChange() {
    console.log('slide change')
  }

}
