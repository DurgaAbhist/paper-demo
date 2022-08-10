import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block2bComponent } from './blockb.component';

describe('Block2bComponent', () => {
  let component: Block2bComponent;
  let fixture: ComponentFixture<Block2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
