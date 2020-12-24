import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicromodalComponent } from './micromodal.component';

describe('MicromodalComponent', () => {
  let component: MicromodalComponent;
  let fixture: ComponentFixture<MicromodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicromodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicromodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
