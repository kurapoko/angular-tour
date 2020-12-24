import { Component, OnInit } from '@angular/core';
import MicroModal from 'micromodal';

MicroModal.init();

@Component({
  selector: 'app-micromodal',
  templateUrl: './micromodal.component.html',
  styleUrls: ['./micromodal.component.scss']
})
export class MicromodalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
