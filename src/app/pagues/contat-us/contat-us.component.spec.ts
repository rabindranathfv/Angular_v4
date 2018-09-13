import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatUsComponent } from './contat-us.component';

describe('ContatUsComponent', () => {
  let component: ContatUsComponent;
  let fixture: ComponentFixture<ContatUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
