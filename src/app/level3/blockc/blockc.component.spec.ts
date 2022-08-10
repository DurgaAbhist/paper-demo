import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block3cComponent } from './blockc.component';

describe('Block3cComponent', () => {
  let component: Block3cComponent;
  let fixture: ComponentFixture<Block3cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block3cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block3cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
