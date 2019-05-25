import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MishnayotComponent } from './mishnayot.component';

describe('MishnayotComponent', () => {
  let component: MishnayotComponent;
  let fixture: ComponentFixture<MishnayotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MishnayotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MishnayotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
