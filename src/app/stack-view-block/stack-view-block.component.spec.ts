import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackViewBlockComponent } from './stack-view-block.component';

describe('StackViewBlockComponent', () => {
  let component: StackViewBlockComponent;
  let fixture: ComponentFixture<StackViewBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackViewBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackViewBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
