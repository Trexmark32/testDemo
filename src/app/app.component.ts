import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsApp';

  news: boolean = true;
  comp: boolean = false;

  toggleComponent() {
    console.log("clicked")
    this.news = !this.news;
    this.comp = !this.comp;
  }
}
