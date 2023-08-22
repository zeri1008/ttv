import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtvSidebarComponent } from './ttv-sidebar.component';

describe('TtvSidebarComponent', () => {
  let component: TtvSidebarComponent;
  let fixture: ComponentFixture<TtvSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtvSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtvSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
