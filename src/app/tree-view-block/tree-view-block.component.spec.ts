import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewBlockComponent } from './tree-view-block.component';

describe('TreeViewBlockComponent', () => {
  let component: TreeViewBlockComponent;
  let fixture: ComponentFixture<TreeViewBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
