import { Review } from './../../models/review.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  public reviewForm: FormGroup;
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.InitForm()
  }

  InitForm() {
    this.reviewForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/)],
      city: ['', Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/)],
      title: ['', [Validators.required, Validators.maxLength(31)], Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/)],
      score: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/)]],
      comment: ['', [Validators.required, Validators.maxLength(365), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/)]]
    })
  

  this.submitted =false  
  }

  onSubmit() {
    this.submitted = true;
    if (this.reviewForm.valid) {
      const review: Review= {
        name: this.reviewForm.get('name')?.value,
        city: this.reviewForm.get('city')?.value,
        title: this.reviewForm.get('title')?.value,
        score: this.reviewForm.get('title')?.value,
        comment: this.reviewForm.get('title')?.value,

      }

      console.log(review);
      console.log('Review registrado');

      this.reviewForm.reset();
      this.submitted = false;
    }
  }


}
