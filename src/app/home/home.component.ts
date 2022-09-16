import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
// import xml2js from 'xml2js'; 
import { Parser } from 'xml2js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: ServiceService) { }

  feedsObs!: Observable<any>;

  postcode: any;

  async ngOnInit(): Promise<void> {
    await this.gewtFeeds();
  }
  itemImageUrl: any;
  title: any;
  desc: any;

  showArr: any[] = [];
  items: any[] = [];
  arr: any[] = [];
  xmlToJson!: string;
  stringJson: any;

  async gewtFeeds() {
    this.feedsObs = this.service.getAllFeeds();
    console.log("home feed", this.feedsObs);
    // this.feedsObs.subscribe((feeds) => {
    //   // feeds.text();
    //   // console.log("all feeds", feeds.text());
    // });
    await this.feedsObs.subscribe((feed) => {
      console.log("all feeds", feed);
      this.parseXML(feed);
    })
  }

  parseXML(data: any) {
    const parser = new Parser({ strict: false, trim: true });

    parser.parseString(data, (err, result) => {
      this.arr.push(JSON.parse(JSON.stringify(result)));
    });
    this.items = this.arr[0].RSS.CHANNEL[0].ITEM
    console.log("arr", this.items);

    this.items.forEach((item, index) => {
      let showObj: any = {};
      console.log("item", item);
      showObj["img"] = item.FULLIMAGE[0];
      showObj["title"] = item.TITLE[0];
      showObj["desc"] = item.DESCRIPTION[0];
      this.showArr.push(showObj);
    })

    console.log("showArr", this.showArr);
  }

  view(index: number) {
    console.log("event", index);
    console.log(this.showArr[index])
    this.itemImageUrl = this.showArr[index].img;
    this.title = this.showArr[index].title;
    this.desc = this.showArr[index].desc;
  }

}
