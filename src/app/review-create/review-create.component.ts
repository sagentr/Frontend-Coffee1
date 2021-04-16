import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup  } from '@angular/forms';
import { Review } from './review.model';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css'],
  providers: [ReviewService]
})
export class ReviewCreateComponent implements OnInit {
  createReviewForm: FormGroup;

  constructor(private reviewService: ReviewService){}
  

  ngOnInit() {
    // This is the javascript object that comprises the form
        this.createReviewForm = new FormGroup({
          'id': new FormControl(null),  
          'datePicker': new FormControl(null, Validators.required),
          'nameOfBusiness': new FormControl(null, Validators.required),
          'beverageName': new FormControl(null, Validators.required),
          'atmosphere': new FormControl(null, Validators.required),
          'overallRating': new FormControl(null, Validators.required),
          'summary': new FormControl(null, Validators.required),

        });
  }

  onSubmit() {
    let review: Review = this.createReviewForm.value
    this.reviewService.postReview(review).subscribe((data) => { console.log(data) } )
    console.log(this.createReviewForm);
    // This gives us access to the form 
  }


}

  

// To Dos:
//Why am I getting this error under createReviewForm - https://tutorial.tips/3-ways-to-fix-property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructorts/ FIXED THE ERROR  we don't know why
//drop down list for atmosphere: cozy, industrial, country, artistic
//implement automatic date selector via material, sync value into object
//link material icon of stars/cups of coffee to values in object, 1,2,3,4,5
//make clicking icons reactive, including the selection, every preceding icon to the one you click changes color
//more reactive feedback, text signals for user when they select their icon rating. 1 = "terrible" 2 = "not great" 3 = "average cup of joe" 4 = "Really good!" 


// export class ReviewCreateComponent implements OnInit {
//    createReviewForm!: FormGroup 
//     constructor() {  }
  
  
//     createReviewForm = this.formBuilder.group()
//     ngOnInit(): void {
//       This is the javascript object that comprises the form
//           this.createReviewForm = new FormGroup({
//             change controls to match backend - what are they expecting?
//             'datepicker': new FormControl(null),
//             'nameofbusiness': new FormControl(null),
//             'beveragename': new FormControl(null),
//             'atmosphere': new FormControl(null),
//             'overallrating': new FormControl(null),
//             'summary': new FormControl(null),
  
//           });
//     }
  
//     onSubmit() {
//       console.log(this.createReviewForm);
//       This gives us access to the form //   constructor(private formBuilder:FormBuilder) {}

//   createReviewForm = this.formBuilder.group({
//     datepicker:['', Validators.required],
//     nameOfBusiness:['', Validators.required],
//     beverageName:['', Validators.required],
//     atmosphere:['', Validators.required],
//     overallRating:['', Validators.required],
//     summary:['', Validators.required]
//   })

// saveForm(){
//   console.log('Form data is ', this.createReviewForm.value); 

  // this.createReviewForm.value.starReviewvalue