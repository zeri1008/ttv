import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordVideoComponent } from './keyword-video.component';

describe('KeywordVideoComponent', () => {
  let component: KeywordVideoComponent;
  let fixture: ComponentFixture<KeywordVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
