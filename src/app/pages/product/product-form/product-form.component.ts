import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm!: FormGroup;
  categories: Array<Category> = []

  constructor(private fb: FormBuilder) { 
    this.productForm = this.fb.group({
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      amount: [0, [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      img: ['', Validators.required],
      category_id: [0, [Validators.required, Validators.min(0)]],
      id: [0, [Validators.required, Validators.min(0)]],
      category: this.fb.group({
        description: ['', Validators.required],
        id: [0, [Validators.required, Validators.min(0)]]
      })
    });
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      amount: [0, [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      img: ['', Validators.required],
      category_id: [0, [Validators.required, Validators.min(0)]],
      id: [0, [Validators.required, Validators.min(0)]],
      category: this.fb.group({
        description: ['', Validators.required],
        id: [0, [Validators.required, Validators.min(0)]]
      })
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    }
  }

}
