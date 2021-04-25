import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { ReviewLibraryComponent } from './review-create/review-library.component';
import { SearchFeatureComponent } from './search-feature/search-feature.component';

// import { StlCoffeeComponent } from './stl-coffee/stl-coffee.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  // {path: 'stlcoffee', component: StlCoffeeComponent},
  {path: 'reviews', component: ReviewCreateComponent},
  {path: 'reviewlibrary', component: ReviewLibraryComponent},
  {path: 'searchfeature', component: SearchFeatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
