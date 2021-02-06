import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  searchResults = [];

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.sharedService.searchResults.subscribe(list => {
      console.log('LIST: ', list)
      this.searchResults = list;
    })
  }

  onNewsSelect(selectedNews) {
    localStorage.setItem('selectedNews', JSON.stringify(selectedNews));
    this.router.navigate(['/details']);
  }

}
