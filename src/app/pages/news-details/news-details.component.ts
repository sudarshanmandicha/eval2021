import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  selectedNews;
  allNews;

  constructor() { }

  ngOnInit(): void {
    this.selectedNews = JSON.parse(localStorage.getItem('selectedNews'));
    this.allNews = JSON.parse(localStorage.getItem('allNews'));
  }

}
