import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWidgetTreeComponent } from './user-widget-tree.component';

describe('UserWidgetTreeComponent', () => {
  let component: UserWidgetTreeComponent;
  let fixture: ComponentFixture<UserWidgetTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWidgetTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWidgetTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
