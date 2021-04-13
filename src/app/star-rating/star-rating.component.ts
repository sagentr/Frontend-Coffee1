import { Component, OnInit, } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {


  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = []; //true = solid star; flase = empty star

  snackBarDuration = 2000;
  response = [
    'The worst!',
    'Not completely horrible.',
    'Just okay.',
    'Pretty Good!',
    'Excellent!'
  ]

  constructor(
    private snackBar: MatSnackBar
  ) {
    //default to no rating - all stars are empty
    this.ratingArr = Array(this.starCount).fill(false);
   }

  ngOnInit(): void {
  }

  returnStar(i: number) { //accepts index of star, 0-4
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number) {    //onclick method, activates showing the snackbar according to click
    this.rating = i + 1;
    this.snackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar']
    });
  }

}
