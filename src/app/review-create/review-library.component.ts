//get all reviews (private side?)
//store in variable
//
import { Component, OnInit } from '@angular/core';
import { Review } from './review.model';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review-library',
  templateUrl: './review-library.component.html',
  styleUrls: ['./review-library.component.css'],
  providers: [ReviewService]
})



export class ReviewLibraryComponent implements OnInit {
    //store reviews array
    reviews: Review[]= []
    constructor(private reviewService: ReviewService){}
    ngOnInit(){ 
      mockdata
    // {this.reviewService.getReviews().subscribe((reviews) => 
    //     {this.reviews = reviews;
    //     console.log(this.reviews)});   
    }
}

let mockdata = {
id: 1,
datePicker: 'Thu Apr 22 2021 00:00:00 GMT-0500 (Central Daylight Time)',
nameOfBusiness: 'SunBeam Coffee',
overallRating: 3,
beverageName: ['Hot Coffee'],
atmosphere: ['Busy', 'Loud'],
summary: `While I didn't completely love this place, I will definitely go back. There was unique art on the walls and overall the place was really warm. The barista gave me "Im about to quit my job" vibes which I found very intriguing. Next time I want to try one of their sandwiches which looked really good.  ` 
}