import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block2dComponent } from './blockd.component';

describe('Block2dComponent', () => {
  let component: Block2dComponent;
  let fixture: ComponentFixture<Block2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
