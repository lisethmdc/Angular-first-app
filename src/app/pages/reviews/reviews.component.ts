import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from './../../models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  public reviewForm: FormGroup;
  public submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.reviewForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      title: ['', Validators.required],
      score: ['', Validators.required],
      comment: ['', Validators.required, Validators.maxLength(300)]
    })
  

  this.submitted = false  
  }

  onSubmit() {
    this.submitted = true;
    if (this.reviewForm.valid) {
      const review: Review = {
        name: this.reviewForm.get('name')?.value,
        city: this.reviewForm.get('city')?.value,
        title: this.reviewForm.get('title')?.value,
        score: this.reviewForm.get('score')?.value,
        comment: this.reviewForm.get('comment')?.value
      }
      
      console.log(review);

    this.reviewForm.reset();
    this.submitted = false;
    }
  } 
}
