import { Crib } from './../crib';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('crib') crib: Crib;
  constructor() { }

  ngOnInit() {
  }

}
