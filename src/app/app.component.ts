import { Component, OnInit } from '@angular/core';
import MicroModal from 'micromodal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-tour';

  slidesPerView = 3;

  swiperList = [
    {title: 'スライダー1'},
    {title: 'スライダー2'},
    {title: 'スライダー3'},
    {title: 'スライダー4'},
    {title: 'スライダー5'},
    {title: 'スライダー6'},
  ]

  ngOnInit() {
    MicroModal.init({
      openTrigger: 'data-micromodal-open',
      closeTrigger: 'data-micromodal-close',
      openClass: 'is-open',
    });
  }

}
