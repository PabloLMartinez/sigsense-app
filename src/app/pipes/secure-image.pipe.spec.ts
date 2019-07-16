import { SecureImagePipe } from './secure-image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Isolated test case.
describe('SecureImagePipe', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('create an instance of SecureImagePipe', inject(
    [HttpClientTestingModule, DomSanitizer],
    (httpCliet: HttpClientTestingModule, domSanitizer: DomSanitizer) => {
    const httpMock = TestBed.get(HttpTestingController);
    const pipe = new SecureImagePipe(httpMock, domSanitizer);
    expect(pipe).toBeTruthy();
  }));

});
