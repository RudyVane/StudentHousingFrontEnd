import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      external_id: ['', Validators.required],
      area_sqm: ['', Validators.required],
      city: ['', Validators.required],
      rent: ['', Validators.required],
      additional_costs: ['', Validators.required],
      deposit: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      description: ['', Validators.required],
      cover_image_url: ['', Validators.required]
    });
  }
  formFields = [
    { label: 'External ID:', id: 'external_id', name: 'external_id', required: true },
    { label: 'Square meters:', id: 'area_sqm', name: 'area_sqm', required: true },
    { label: 'City:', id: 'city', name: 'city', required: true },
    { label: 'Rent:', id: 'rent', name: 'rent', required: true },
    { label: 'Additional costs:', id: 'additional_costs', name: 'additional_costs', required: true },
    { label: 'Deposit:', id: 'deposit', name: 'deposit', required: true },
    { label: 'Latitude:', id: 'latitude', name: 'latitude', required: true },
    { label: 'Longitude:', id: 'longitude', name: 'longitude', required: true },
    { label: 'Description:', id: 'description', name: 'description', required: true },
    { label: 'Cover image URL:', id: 'cover_image_url', name: 'cover_image_url', required: true }
  ];


  submitForm() {
    if (this.form.valid) {
      const formData = JSON.stringify(this.form.value);
      this.http.post('/property', formData).subscribe(
        (response) => {
          console.log('Form submission successful:', response);
          // Handle any success logic here
        },
        (error) => {
          console.error('Form submission error:', error);
          // Handle any error logic here
        }
      );
    }
   else {
      // Form is invalid, display error messages or take appropriate action
    }
  }
}
