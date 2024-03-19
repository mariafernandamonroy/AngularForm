import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EdaService {
  private url = 'http://sandbox-eda.lineadecodigo.net/v1/auth/login';
  private headers = new HttpHeaders()
    .set(
      'Authorization',
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOnsidXNlciI6IjYzZmNlNDgwZjIzNDY5MWYyNjU0YjkzZCIsIm9yZ2FuaXphdGlvbiI6IjYzZmNlNDdlNmVmNmQ5ZmQ5ODM2MjA1ZCJ9LCJpYXQiOjE2Nzc1MTk4ODEsImV4cCI6MTY4MjcwMzg4MX0.pW9ZRAC7mw4H71EyueFX8OwT6VLXrz4I12bCCLZgfBc'
    )
    .set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  addFile(checksum: any): Observable<any> {
    return this.httpClient.post(this.url, checksum,{ headers: this.headers} );
  }
}
