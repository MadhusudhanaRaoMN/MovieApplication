import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviewDetailsComponent } from './moview-details.component';

describe('MoviewDetailsComponent', () => {
  let component: MoviewDetailsComponent;
  let fixture: ComponentFixture<MoviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
