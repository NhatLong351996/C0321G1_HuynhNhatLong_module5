import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaydeleteComponent } from './dictionaydelete.component';

describe('DictionaydeleteComponent', () => {
  let component: DictionaydeleteComponent;
  let fixture: ComponentFixture<DictionaydeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaydeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
