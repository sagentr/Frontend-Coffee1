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
    // {this.reviewService.getReviews().subscribe((reviews) => 
    //     {this.reviews = reviews;
    //     console.log(this.reviews)});   
    }
}


//let mockdata = {
// id: 1,
// datePicker: 'Thu Apr 22 2021 00:00:00 GMT-0500 (Central Daylight Time)',
// nameOfBusiness: 'Panera',
// overallRating: 3,
// beverageName: ['Hot Coffee'],
// atmosphere: ['Busy', 'Loud'],
// summary: 'This coffee is meh' }
