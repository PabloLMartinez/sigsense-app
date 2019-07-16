import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';


describe('Authentication service:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService],
      imports: [HttpClientTestingModule]
    });
  });

  describe(':', () => {

    function setup() {
      const authenticationService = TestBed.get(AuthenticationService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { authenticationService, httpTestingController };
    }

    it('should call login function', () => {
      const { authenticationService, httpTestingController } = setup();
      const mockUserData = {
        token: 'token',
        userId: 0,
        userName: 'userName'
      };
      authenticationService.login('email@email.com', 'password').subscribe(data => {
        expect(data.mapData).toEqual(mockUserData);
      });

      const req = httpTestingController.expectOne('/login');

      expect(req.request.method).toBe('PUT');

      req.flush({
        mapData: mockUserData
      });
    });

    afterEach(() => {
      const { httpTestingController } = setup();
      httpTestingController.verify();
    });
  });
});
