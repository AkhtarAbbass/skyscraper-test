import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyWriterServiceComponent } from './easy-writer-service.component';

describe('EasyWriterServiceComponent', () => {
  let component: EasyWriterServiceComponent;
  let fixture: ComponentFixture<EasyWriterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyWriterServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyWriterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
