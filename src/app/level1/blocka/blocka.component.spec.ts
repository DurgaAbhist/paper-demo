import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block1aComponent } from './blocka.component';

describe('Block1aComponent', () => {
  let component: Block1aComponent;
  let fixture: ComponentFixture<Block1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
