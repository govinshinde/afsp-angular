import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberListComponent } from './phone-number-list.component';

describe('PhoneNumberListComponent', () => {
  let component: PhoneNumberListComponent;
  let fixture: ComponentFixture<PhoneNumberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumberListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
