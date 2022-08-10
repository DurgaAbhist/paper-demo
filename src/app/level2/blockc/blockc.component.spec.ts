import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block2cComponent } from './blockc.component';

describe('Block2cComponent', () => {
  let component: Block2cComponent;
  let fixture: ComponentFixture<Block2cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block2cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
