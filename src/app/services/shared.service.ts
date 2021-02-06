import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SharedService {

    searchResults = new BehaviorSubject([]);

    constructor(private httpClient: HttpClient) { }

    getExistingAccountList(filterBy) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            observe: 'response' as 'body',
            params: new HttpParams({ fromObject: filterBy })
        };

        return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + environment.API_KEY, httpOptions);
    }

}