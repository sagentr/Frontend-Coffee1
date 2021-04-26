import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup  } from '@angular/forms';
import { Review } from '../review-create/review.model';
import { SearchService } from './search.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-search-feature',
  templateUrl: './search-feature.component.html',
  styleUrls: ['./search-feature.component.css']
})
export class SearchFeatureComponent implements OnInit {
  reviews: Review[] = []; 
  searchForm: FormGroup;
  
  chipsControl: any;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }



  constructor(private searchService: SearchService){}

  ngOnInit(){
    // this.getReviewsBySearch();

    this.chipsControl = new FormControl('');
    // let chipsValue$ = this.chipsControl.valueChanges;

    this.searchForm = new FormGroup({})


  }
  



    onSubmit() {
      // console.log(this.chipsControl.value)
      this.searchService.getReviewsByChips(this.chipsControl.value).subscribe((reviewData) =>
      this.reviews = reviewData)
    }
   




}

