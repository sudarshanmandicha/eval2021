import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from '../routers/news.router';

import { NewsHomeComponent } from '../pages/news-home/news-home.component';
import { NewsDetailsComponent } from '../pages/news-details/news-details.component';
import { BookmarksComponent } from '../pages/bookmarks/bookmarks.component';
import { SearchResultsComponent } from '../pages/search-results/search-results.component';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ],
  declarations:[
      NewsHomeComponent,
      NewsDetailsComponent,
      BookmarksComponent,
      SearchResultsComponent
  ],
  providers: []
})
export class NewsModule { }
