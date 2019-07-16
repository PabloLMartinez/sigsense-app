import { SecureImagePipe } from './secure-image.pipe';
import {DomSanitizer} from '@angular/platform-browser';
import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

// Isolated test case.
describe('ReversePipe', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  // it('create an instance', () => {
  //   const pipe = new SecureImagePipe();
  //   expect(pipe).toBeTruthy();
  //   expect(
  //     pipe.transform('blob:http://localhost:4200/1c2d6b8a-589d-4423-bcfa-4fe0e125ba6c'))
  //     .toBe('blob:http://localhost:4200/1c2d6b8a-589d-4423-bcfa-4fe0e125ba6c');
  // });
  it('create an instance', inject(
    [HttpClientTestingModule, DomSanitizer],
    (httpCliet: HttpClientTestingModule, domSanitizer: DomSanitizer) => {
    const httpMock = TestBed.get(HttpTestingController);
    const pipe = new SecureImagePipe(httpMock, domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
