import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from './review.model';

@Injectable({
    providedIn: 'root'
})


export class ReviewService {
    reviewURL = 'placeholder for api url';

    constructor(private http: HttpClient){} 
    //fetches data
    getReviews():  Observable<Review[]> {
        return this.http.get<Review[]>('pass private review URL')
    }

    //posts data
    postReview(review: Review): Observable<Review> {
        return this.http.post<Review>('pass REVIEW URL here', review)     
    }
}

