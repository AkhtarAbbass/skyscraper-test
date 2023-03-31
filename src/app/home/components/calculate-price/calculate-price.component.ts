import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/common/services/forms.service';
import { OrderService } from 'src/app/core/service/order.service';

@Component({
  selector: 'app-calculate-price',
  templateUrl: './calculate-price.component.html',
  styleUrls: ['./calculate-price.component.css']
})
export class CalculatePriceComponent {
  balance_section: boolean = false;
  showDiscountValues: boolean = false;

  counter = 1;

  @Input() priceForm!: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormsService, private orderService: OrderService) {
    this.priceForm = this.fb.group({
      priceFields: this.formService.calculatePriceForm
    });
  }


  get calculatePriceForm(): FormGroup {
    return this.priceForm.get('priceFields') as FormGroup;
  }

  getFormControl(control: string) {
    return this.calculatePriceForm.controls[`${control}`];
  }

  payWithCard() {
    this.balance_section = false;
  }

  payWithWallet() {
    this.balance_section = true;
  }

  showDiscountSec() {
    this.showDiscountValues = !this.showDiscountValues;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }


  nextStep(): void {
    if (this.calculatePriceForm.invalid) {
      this.calculatePriceForm.markAllAsTouched();
      return;
    }
    console.log("Input Values:", this.calculatePriceForm.value)
    this.orderService.priceCalculate(this.calculatePriceForm.value).subscribe((response) => {
      console.log("Responce", response);
    });
  }
}
