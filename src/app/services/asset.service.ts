import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private currentUser: any = {};

  constructor( private http: HttpClient ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  private getHeaders() {
    return new HttpHeaders({
      'x-access-token': this.currentUser.token
    });
  }

  public getAllAssets(companyId: number) {

    const headers = this.getHeaders();

    return this.http.get<any>(`/companies/${ companyId }/assets`, { headers })
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
