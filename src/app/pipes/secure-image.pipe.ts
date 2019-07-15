import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'secureImage'
})
export class SecureImagePipe implements PipeTransform {

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer) { }

  transform(url): Observable<SafeUrl> {
    return this.http
      .get(`${ url }/image`, { responseType: 'blob' })
      .pipe( map(val => this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(val)) ));
  }
}
