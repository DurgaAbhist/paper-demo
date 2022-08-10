import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block2aComponent } from './blocka.component';

describe('Block2aComponent', () => {
  let component: Block2aComponent;
  let fixture: ComponentFixture<Block2aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block2aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
