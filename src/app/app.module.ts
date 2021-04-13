import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { NavbarComponent } from './navbar/navbar.component';
import { ReviewInspectIndividualComponent } from './review-inspect-individual/review-inspect-individual.component';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { ReviewLibraryComponent } from './review-library/review-library.component';
import { SearchFeatureComponent } from './search-feature/search-feature.component';
import { ReactiveFormsModule,  } from '@angular/forms';


// import { ControlValueAccessorModule } from '@angular/forms';

// import { HttpModule } from '@angular/http';
// import {} from '@angular/forms'
import { AppComponent } from './app.component';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReviewInspectIndividualComponent,
    ReviewCreateComponent,
    ReviewLibraryComponent,
    SearchFeatureComponent,
    StarRatingComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    // HttpModule
    ReactiveFormsModule,
    // ControlValueAccessorModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
