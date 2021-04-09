import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewInspectIndividualComponent } from './review-inspect-individual.component';

describe('ReviewInspectIndividualComponent', () => {
  let component: ReviewInspectIndividualComponent;
  let fixture: ComponentFixture<ReviewInspectIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewInspectIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewInspectIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
