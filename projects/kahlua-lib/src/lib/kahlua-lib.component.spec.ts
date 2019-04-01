import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KahluaLibComponent } from './kahlua-lib.component';

describe('KahluaLibComponent', () => {
  let component: KahluaLibComponent;
  let fixture: ComponentFixture<KahluaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahluaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KahluaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
