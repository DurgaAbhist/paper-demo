import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block1dComponent } from './blockd.component';

describe('Block1dComponent', () => {
  let component: Block1dComponent;
  let fixture: ComponentFixture<Block1dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block1dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block1dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
