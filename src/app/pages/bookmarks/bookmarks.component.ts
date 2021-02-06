import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  allBookmarks: any = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.allBookmarks = JSON.parse(localStorage.getItem('bookMarkedList'));
  }

  onNewsSelect(selectedNews) {
    localStorage.setItem('selectedNews', JSON.stringify(selectedNews));
    this.router.navigate(['/details']);
  }

  onClickBookMark(selectedNews) {
    const tempList = JSON.parse(localStorage.getItem('bookMarkedList'));
    let checkList = tempList.filter(list => list.title != selectedNews.title);
    this.allBookmarks = checkList;
    localStorage.setItem('bookMarkedList', JSON.stringify(checkList));
  }

}
