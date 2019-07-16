import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe(':', () => {
    // Begin by putting re-usable, preparatory code in a setup function instead of beforeEach().
    // The setup() function returns an object literal with the variables, such as app, that a test might reference.
    // You don't define semi-global variables (e.g., let app,fixture ) in the body of the describe().
    // Then each test invokes setup() in its first line, before continuing with steps that
    // manipulate the test subject and assert expectations.

    function setup() {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      return { fixture, app };
    }

    it('should create the app', async(() => {
      const { app } = setup();
      expect(app).toBeTruthy();
    }));
  });
});
