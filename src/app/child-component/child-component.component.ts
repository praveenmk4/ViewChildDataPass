import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  constructor() {}
  @ViewChildren('welllist') wellList = ElementRef;
  name: any;
  type: any;
  source: number;
  wellListArr: any = [];
  ngOnInit(): void {}
  add() {
    this.wellListArr.push({
      name: this.name,
      type: this.type,
      source: this.source,
    });
  }
}
