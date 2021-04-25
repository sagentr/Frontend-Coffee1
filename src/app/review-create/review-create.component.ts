import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup  } from '@angular/forms';
import { Review } from './review.model';
import { ReviewService } from './review.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css'],
  providers: [ReviewService]
})
export class ReviewCreateComponent implements OnInit {
  createReviewForm: FormGroup;


  constructor(private reviewService: ReviewService ){}
  

  ngOnInit() {
    // This is the javascript object that comprises the form
        this.createReviewForm = new FormGroup({
          'id': new FormControl(null),  
          'dateOfVisit': new FormControl(null, Validators.required),
          'nameOfBusiness': new FormControl(null, Validators.required),
          'beverageName': new FormControl(null, Validators.required),
          'atmosphere': new FormControl(null, Validators.required),
          'overallRating': new FormControl(null, Validators.required),
          'summary': new FormControl(null, Validators.required),

        });
  }

  onSubmit() {
    let review: Review = this.createReviewForm.value
    // this.reviewService.postReview(review).subscribe((data) => { console.log(data) } )
    console.log(review)
    // console.log(this.createReviewForm);
    // This gives us access to the form 
  }

  opensweetalert(){
    Swal.fire('Your Review has been saved')
  }


}














