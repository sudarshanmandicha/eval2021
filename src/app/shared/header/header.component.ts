import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeTab: string;
  searchText: string;
  isLoading: boolean;

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.activeTab = this.router.url.split('/')[1];
      }
    });
  }

  onTabClick(inValue: string) {
    this.activeTab = inValue;
    this.router.navigate(['/' + inValue]);
  }

  searchNews() {
    if (this.searchText) {
      this.isLoading = true;
      const tempObj = { q: this.searchText };
      console.log('tempObj: ', tempObj);
      this.sharedService.getExistingAccountList(tempObj).subscribe(
        (successResp: any) => {
          console.log('TEST: ', successResp.body.articles);
          this.sharedService.searchResults.next(successResp.body.articles);
          this.router.navigate(['search-results']);
          this.isLoading = false;
        },
        (err) => {
          console.log('ERR: ', err);
        }
      )
    }
  }

}
