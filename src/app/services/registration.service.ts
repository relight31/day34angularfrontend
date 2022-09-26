import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Registration } from '../components/models';

@Injectable()
export class RegistrationService {
  constructor(private http: HttpClient) {}

  register(registration: Registration): Promise<Response> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return lastValueFrom(
      this.http.post<Response>(
        'http://sheltered-temple-16401.herokuapp.com/api/registration',
        registration,
        {
          headers,
        }
      )
    );
  }
}
