import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor( private http: HttpClient ) { }

  protected getHeaders() {
    return new HttpHeaders({
      'x-access-token': `${ this.currentUser.token }`
    });
  }

  public getAllAssets() {

    const headers = this.getHeaders();

    return this.http.get<any>(`/companies/${ this.currentUser.roles[0].companyId }/assets?limit=10`, { headers })
      .pipe( map( data => data['items'] ) );
  }

  public getAssetsDetails(assetsList: Array<string>): Observable<any> {

    const headers = this.getHeaders();

    const assets = assetsList.map(asset => {
      return this.http.get<any>(`${ asset }`, { headers });
    });

    return forkJoin(...assets);
  }

}
