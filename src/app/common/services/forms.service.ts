import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  constructor(private fb: FormBuilder) { }

  private EMAIL_FORM_CONTROL = [
    '',
    [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
    ],
  ]
  private CONTACT_NUMBER = [
    '',
    Validators.compose([
      Validators.required,
      Validators.pattern(/^[0-9]\d*$/),
    ]),
  ];

  get calculatePriceForm() {
    return this.fb.group(
      {
        Email: this.EMAIL_FORM_CONTROL,
        Phone: this.CONTACT_NUMBER,
        Document_type: ['', Validators.required],
        Academic_level: ['', Validators.required],
        Pages: [''],
        Deadline: ['', Validators.required],
        time: ['', Validators.required],
        timeAM: ['', Validators.required]
      }
    );
  }
}
