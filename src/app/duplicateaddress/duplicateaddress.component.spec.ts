import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateaddressComponent } from './duplicateaddress.component';

describe('DuplicateaddressComponent', () => {
  let component: DuplicateaddressComponent;
  let fixture: ComponentFixture<DuplicateaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
