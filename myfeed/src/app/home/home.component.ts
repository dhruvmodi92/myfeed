import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  feed: any;
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    /*this.feedService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.feed = data;
    }) */

  }

  callFeedService() {
    this.feedService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.feed = JSON.stringify(data);
    })
  }
}
