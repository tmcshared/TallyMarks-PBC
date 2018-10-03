import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import xml2js from "xml2js";
import "rxjs/Rx";

@Injectable()
export class NetworkManagerService {
  constructor(private http: HttpClient) {}
  post(url, body): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "text/xml")
      .append("dataType", "xml");
    return this.http
      .post(url, body, {
        headers: httpHeaders,
        responseType: "text"
      })
      .map(res => {
        let data;
        xml2js.parseString(res, function(err, result) {
          data = result["soap:Envelope"]["soap:Body"];
        });
        return data[0];
      });
  }
  getForkJoin(request: any[]): Observable<any> {
    const array = [];
    request.forEach((item, key) => {
      array.push(this.createRequest(item.url, item.body));
    });
    return Observable.forkJoin(array).map(data => {
      return data.map(res => {
        let data;
        xml2js.parseString(res, function(err, result) {
          data = result["soap:Envelope"]["soap:Body"];
        });
        return data[0];
      });
    });
  }
  createRequest(url, body) {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "text/xml")
      .append("dataType", "xml");
    return this.http.post(url, body, {
      headers: httpHeaders,
      responseType: "text"
    });
  }
  insert(url, body): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "text/xml")
      .append("dataType", "xml");

    return this.http
      .post(url, body, {
        headers: httpHeaders,
        responseType: "text"
      })
      .map(res => {
        let data;
        xml2js.parseString(res, function(err, result) {
          data = result["soap:Envelope"]["soap:Body"];
        });
        return data[0];
      });
  }
}
