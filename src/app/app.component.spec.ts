import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule,
        ReactiveFormsModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should submit be disabled`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.employeeForm.controls['firstName'].setValue('');
    app.employeeForm.controls['lastName'].setValue('');
    app.employeeForm.controls['department'].setValue('');
    app.employeeForm.controls['dateOfBirth'].setValue('');
    app.employeeForm.controls['gender'].setValue('');
    expect(app.employeeForm.valid).toBeFalsy();
  });

  it(`should submit be enabled`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.employeeForm.controls['firstName'].setValue('shlok');
    app.employeeForm.controls['lastName'].setValue('srivastava');
    app.employeeForm.controls['department'].setValue('FrontEnd');
    app.employeeForm.controls['dateOfBirth'].setValue('1996-12-10');
    app.employeeForm.controls['gender'].setValue('M');
    expect(app.employeeForm.valid).toBeTrue();
  });

  it(`should table be displayed`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.nativeElement;
   expect(app.querySelector('table')).toBeDefined();
  });

});
