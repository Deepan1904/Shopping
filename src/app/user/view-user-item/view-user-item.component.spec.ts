import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserItemComponent } from './view-user-item.component';

describe('ViewUserItemComponent', () => {
  let component: ViewUserItemComponent;
  let fixture: ComponentFixture<ViewUserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
