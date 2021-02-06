import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from '../pages/bookmarks/bookmarks.component';

import { NewsDetailsComponent } from '../pages/news-details/news-details.component';
import { NewsHomeComponent } from '../pages/news-home/news-home.component';
import { SearchResultsComponent } from '../pages/search-results/search-results.component';

const routes: Routes = [
  {
    path: 'home',
    component: NewsHomeComponent
  },
  {
    path: 'details',
    component: NewsDetailsComponent
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent
  },
  {
    path: 'search-results',
    component: SearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
