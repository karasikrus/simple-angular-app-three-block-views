import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridBlockComponent } from './data-grid-block.component';

describe('DataGridBlockComponent', () => {
  let component: DataGridBlockComponent;
  let fixture: ComponentFixture<DataGridBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
