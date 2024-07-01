import { Injectable } from '@angular/core';
import { Model } from '../../abstract-model/model';
import { CONSTANT_URL } from 'src/app/constant/constant-rest';
import { WebStorageService } from 'encrypt-webstorage';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<TModel extends Model> {

  BASE_URL = CONSTANT_URL.BASE_URL;
  userSession?: User;
  token = '';
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })

  constructor(
    public http: HttpClient,
    public URL: string,
    private webStorage : WebStorageService ,
  ) { 
    this.BASE_URL += URL;
    if( sessionStorage.getItem('session') ){    
      this.userSession = JSON.parse( this.webStorage!.getItem('session') ) as User;
      this.token = this.userSession?.token;
      this.headers = this.headers.set('Authorization', `Bearer ${this.token}`);
    }
  }

  public getAll(): Observable<any> {
    const url = this.BASE_URL;
    return this.http.get(url, { headers: this.headers });
  }
  
  public getPagination(firstPageNumber: number, secundPgeNumber: number): Observable<any> {    
    const url = `${this.BASE_URL}?skip=${firstPageNumber}&limit=${secundPgeNumber}`;
    return this.http.get(url, { headers: this.headers });
  }

  public getOne(id: string | any): Observable<any> {
    const url = this.BASE_URL + id;
    return this.http.get(url, { headers: this.headers });
  }

  public save(data: TModel | any): Observable<any> {
    const url = this.BASE_URL;
    return this.http.post(url, data, { headers: this.headers });
  }

  public update(id: string, data: TModel | any): Observable<any> {
    const url = this.BASE_URL;
    return this.http.put(url + id, data, { headers: this.headers });
  }

  public delete(id: string): Observable<any> {
    const url = this.BASE_URL + id;
    return this.http.delete(url, { headers: this.headers });
  }
}
