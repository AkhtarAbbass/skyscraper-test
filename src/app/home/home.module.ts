import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './container/home/home.component';
import { QualityComponent } from './components/quality/quality.component';
import { ServicesComponent } from './components/services/services.component';
import { CustomerReviewComponent } from './components/customer-review/customer-review.component';
import { AskedQuestionsComponent } from './components/asked-questions/asked-questions.component';
import { EasyWriterServiceComponent } from './components/easy-writer-service/easy-writer-service.component';
import { CalculatePriceComponent } from './components/calculate-price/calculate-price.component';
import { DetailsSectionComponent } from './components/details-section/details-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    QualityComponent,
    ServicesComponent,
    CustomerReviewComponent,
    AskedQuestionsComponent,
    EasyWriterServiceComponent,
    CalculatePriceComponent,
    DetailsSectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class HomeModule { }
