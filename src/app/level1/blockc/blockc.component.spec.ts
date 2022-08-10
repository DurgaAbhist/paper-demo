import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block1cComponent } from './blockc.component';

describe('Block1cComponent', () => {
  let component: Block1cComponent;
  let fixture: ComponentFixture<Block1cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block1cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block1cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
