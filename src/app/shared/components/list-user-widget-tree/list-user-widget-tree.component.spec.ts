import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserWidgetTreeComponent } from './list-user-widget-tree.component';

describe('ListUserWidgetTreeComponent', () => {
  let component: ListUserWidgetTreeComponent;
  let fixture: ComponentFixture<ListUserWidgetTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserWidgetTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserWidgetTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
