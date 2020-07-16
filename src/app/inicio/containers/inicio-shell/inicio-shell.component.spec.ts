import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioShellComponent } from './inicio-shell.component';

describe('InicioShellComponent', () => {
  let component: InicioShellComponent;
  let fixture: ComponentFixture<InicioShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioShellComponent ]
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
