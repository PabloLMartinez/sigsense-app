import {TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthComponent } from './auth.component';
import { AlertComponent } from '../../directives';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../../services';
import { Observable, Observer } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AuthComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        AuthComponent,
        AlertComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  describe(':', () => {
    // Begin by putting re-usable, preparatory code in a setup function instead of beforeEach().
    // The setup() function returns an object literal with the variables, such as app, that a test might reference.
    // You don't define semi-global variables (e.g., let app,fixture ) in the body of the describe().
    // Then each test invokes setup() in its first line, before continuing with steps that
    // manipulate the test subject and assert expectations.

    function setup() {
      const fixture = TestBed.createComponent(AuthComponent);
      const component = fixture.debugElement.componentInstance;
      const authService = fixture.debugElement.injector.get(AuthenticationService);

      return { fixture, component, authService };
    }

    it('should create the AuthComponent', async(() => {
      const { component } = setup();
      expect( component ).toBeTruthy();
    }));

    it('should display a system error', fakeAsync(() => {
      const { fixture, component, authService } = setup();
      spyOn(authService, 'login').and.returnValue(
        Observable.create((observer: Observer<{ name: string }>) => {
          return observer.error('something went wrong');
        })
      );

      tick();
      fixture.detectChanges();

      const userAsyncElement = fixture.debugElement.nativeElement;
      const systemError = userAsyncElement.querySelector('div');
      expect(systemError.textContent).toBe('LoginEmailPasswordLogin');
    }));
  });
});
