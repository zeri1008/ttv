import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtvScriptComponent } from './ttv-script.component';

describe('TtvScriptComponent', () => {
  let component: TtvScriptComponent;
  let fixture: ComponentFixture<TtvScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtvScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtvScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
