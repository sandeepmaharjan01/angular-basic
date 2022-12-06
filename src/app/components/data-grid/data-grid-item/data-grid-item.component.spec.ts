import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridItemComponent } from './data-grid-item.component';

describe('DataGridItemComponent', () => {
  let component: DataGridItemComponent;
  let fixture: ComponentFixture<DataGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
