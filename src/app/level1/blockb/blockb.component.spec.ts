import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block1bComponent } from './blockb.component';

describe('Block1bComponent', () => {
  let component: Block1bComponent;
  let fixture: ComponentFixture<Block1bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block1bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
