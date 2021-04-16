import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../review-create/review.model';
import { HttpParams } from "@angular/common/http";


//get request

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    searchURL = 'placeholder for api url';

    constructor(private http: HttpClient){} 
    
    getReviewsByChips(chips: string[]) {
        let params = new HttpParams()
        chips.forEach((chip) => params.append('search', chip)
        )
        return this.http.get<Review[]>
        (this.searchURL, {params: params})
    }
}

