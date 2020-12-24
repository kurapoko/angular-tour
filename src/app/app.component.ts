import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
