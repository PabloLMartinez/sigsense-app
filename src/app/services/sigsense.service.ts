import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigsenseService {

  private url = 'https://dev.sigsense.tech/';

  constructor( private http: HttpClient ) { }

  public login(email: string, password: string): Observable<any> {

    return this.http.put<any>(this.url + 'login', { email: email, password: password })
      .pipe(
        map(user => {
          console.log(user);
          // if (user && user.token) {
          //   // armazenar detalhes do usuário e token jwt no localStorage para manter o usuário logado entre as atualizações da página
          //   localStorage.setItem('currentUser', JSON.stringify(user));
          // }
          //
          // return user;
        })
      );

  }
}
