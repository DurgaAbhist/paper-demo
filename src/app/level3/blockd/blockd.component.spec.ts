import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block3dComponent } from './blockd.component';

describe('Block3dComponent', () => {
  let component: Block3dComponent;
  let fixture: ComponentFixture<Block3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
