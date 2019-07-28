import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, Observer } from 'rxjs';
import { Observable,Subscription } from 'rxjs';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class BasicserviceService {

  //uri = 'http://localhost:9999';

  constructor(private http: HttpClient) { }
  readonly baseUrl: string = 'http://localhost:9999/';
  iSubscribe: Subscription;

  private logged = new BehaviorSubject<string>('none');
  currentLogged = this.logged.asObservable();
  changeLogged = (value: string) => this.logged.next(value);

 /* private _menuMsgSource=new Subject<string>();
  menuMessage$=this._menuMsgSource.asObservable();
  getfeedback(){
    this._menuMsgSource.next();
  }*/
  // ajaxcallinsert(data : Object): Observable<Location> {

  //   let urilink = "/insert";
  //   return this.http.post<Location>(this.uri + urilink, data);
  // }
  get(apiName): Observable<any> {
    return this.http.get(this.baseUrl + apiName, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'token':''
      })
    });
  }

  post(apiName, dataInfo): Observable<any> {
    return this.http.post(this.baseUrl + apiName, dataInfo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'token':''
      })
    });
  }

  apiGet1(apiName : string) : Observable<any>{
    return this.http.get(this.baseUrl+apiName);
  }

  apiGet(apiName: string, callBack: (arg: any) => void) {
    this.iSubscribe = this.get(apiName).subscribe(
      res => 
        callBack(res)
      // error => {
      //   alert('Server Not Responding, Try Again');
      //   // console.log(error);
      );
  }

  apiPost(apiName: string, data: any, callBack: (arg: any) => void) {
    this.iSubscribe = this.post(apiName, data).subscribe(
      res => callBack(res),
      error => {
        alert('Server Not Responding, Try Again');
        // console.log(error);
      });
  }
}
