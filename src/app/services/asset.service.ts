import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor( private http: HttpClient ) { }

  public getAllAssets() {

    console.log(this.currentUser.token);

    const headers = new HttpHeaders({
      'x-access-token': `${ this.currentUser.token }`
    });

    return this.http.get<any>(`/companies/${ this.currentUser.roles[0].companyId }/assets`, { headers })
      .pipe(  map( data => data['items'] ) );
  }
}
