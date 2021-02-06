import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {

  topNews: any;
  pageSize = 10;
  page = 1;
  allNews: any = [];
  scrollDistance = 1;
  scrollUpDistance = 2;
  throttle = 300;
  isLoading: boolean;

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.isLoading = true;
    const tempObj = { pageSize: this.pageSize, page: this.page };
    console.log('tempObj: ', tempObj);
    this.sharedService.getExistingAccountList(tempObj).subscribe(
      (successResp: any) => {
        this.allNews.push.apply(this.allNews, successResp.body.articles);
        this.topNews = this.allNews[3];
        localStorage.setItem('allNews', JSON.stringify(this.allNews));
        this.isLoading = false;
      },
      (err) => {
        console.log('ERR: ', err);
      }
    )
  }

  onNewsSelect(selectedNews) {
    localStorage.setItem('selectedNews', JSON.stringify(selectedNews));
    this.router.navigate(['/details']);
  }

  checkWhetherBookmarked(selectedNews) {
    let isBookMarked: boolean;
    const tempList = JSON.parse(localStorage.getItem('bookMarkedList'));
    if (tempList) {
      const checkList = tempList.filter(list => list.title == selectedNews.title);
      if (checkList.length) {
        isBookMarked = true;
      } else {
        isBookMarked = false;
      }
    } else {
      isBookMarked = false;
    }

    return isBookMarked;
  }

  onClickBookMark(selectedNews) {
    const checkForBookmarkList = localStorage.getItem('bookMarkedList');
    if (checkForBookmarkList) {
      const tempList = JSON.parse(localStorage.getItem('bookMarkedList'));
      let checkList = tempList.filter(list => list.title == selectedNews.title);
      if (checkList.length) {
        checkList = tempList.filter(list => list.title != selectedNews.title);
      } else {
        tempList.push(selectedNews);
        checkList = tempList;
        alert('BOOKMARK ADDED!')
      }
      localStorage.setItem('bookMarkedList', JSON.stringify(checkList));
    } else {
      alert('BOOKMARK ADDED!')
      localStorage.setItem('bookMarkedList', JSON.stringify([selectedNews]));
    }
  }

  onScrollDown() {
    this.page++;
    this.getAllNews();
  }
}
