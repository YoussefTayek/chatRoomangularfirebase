import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
// tslint:disable-next-line: no-input-rename
@Input() title: string;
isExpanded: boolean;

toggle() {
  this.isExpanded = !this.isExpanded;
}
}
