import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeBulkContactComponent } from './merge-bulk-contact.component';

describe('MergeBulkContactComponent', () => {
  let component: MergeBulkContactComponent;
  let fixture: ComponentFixture<MergeBulkContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeBulkContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeBulkContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
