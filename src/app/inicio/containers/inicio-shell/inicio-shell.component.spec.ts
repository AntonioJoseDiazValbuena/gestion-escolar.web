import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioShellComponent } from './inicio-shell.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('InicioShellComponent', () => {
  let component: InicioShellComponent;
  let fixture: ComponentFixture<InicioShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InicioShellComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
