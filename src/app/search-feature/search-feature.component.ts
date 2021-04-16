import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup  } from '@angular/forms';
import { Review } from '../review-create/review.model';
import { SearchService } from './search.service';


@Component({
  selector: 'app-search-feature',
  templateUrl: './search-feature.component.html',
  styleUrls: ['./search-feature.component.css']
})
export class SearchFeatureComponent implements OnInit {
  reviews: Review[] = []; 
  
  chipsControl: any;

  constructor(private searchService: SearchService){}

  ngOnInit(){
    // this.getReviewsBySearch();

    this.chipsControl = new FormControl('');
    // let chipsValue$ = this.chipsControl.valueChanges;


  }
  



    onSubmit() {
      // console.log(this.chipsControl.value)
      this.searchService.getReviewsByChips(this.chipsControl.value).subscribe((reviewData) =>
      this.reviews = reviewData)
    }
   




}

