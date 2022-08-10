import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block3aComponent } from './blocka.component';

describe('Block3aComponent', () => {
  let component: Block3aComponent;
  let fixture: ComponentFixture<Block3aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block3aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
