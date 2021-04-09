import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLibraryComponent } from './review-library.component';

describe('ReviewLibraryComponent', () => {
  let component: ReviewLibraryComponent;
  let fixture: ComponentFixture<ReviewLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
