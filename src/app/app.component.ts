import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Poc2';
  message = 'Add Well';
  wellList: any = [];
  @ViewChild(ChildComponentComponent) child;
  ngAfterViewInit() {
    this.wellList = this.child.wellListArr || {
      name: '',
      type: '',
      source: 0,
    };
  }
}
