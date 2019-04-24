import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMobile } from './[imobile]';

@Injectable({
  providedIn: 'root'
})
export class MobileservService {
  private url="/assets/mobile.json";

  constructor(private http:HttpClient) { } //Httpclient is the class of HttpClientModule which helps to communicate with server for client requests
  getmobile():Observable<IMobile[]>  //Observable recieves the single response from the http 
  {                             //and send the data by casting to the type of mobile interface and retrieve the data to the subscribed components
    return this.http.get<IMobile[]>(this.url);
  }
}
