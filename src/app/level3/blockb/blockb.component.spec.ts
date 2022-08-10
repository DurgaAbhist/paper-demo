import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block3bComponent } from './blockb.component';

describe('Block3bComponent', () => {
  let component: Block3bComponent;
  let fixture: ComponentFixture<Block3bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block3bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block3bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
