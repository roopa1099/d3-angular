import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElementComponentComponent } from './list-element-component.component';

describe('ListElementComponentComponent', () => {
  let component: ListElementComponentComponent;
  let fixture: ComponentFixture<ListElementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListElementComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListElementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
