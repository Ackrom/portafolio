import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologyAndToolsComponent } from './tecnology-and-tools.component';

describe('TecnologyAndToolsComponent', () => {
  let component: TecnologyAndToolsComponent;
  let fixture: ComponentFixture<TecnologyAndToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologyAndToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologyAndToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
