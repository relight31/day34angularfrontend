import { Data } from '@angular/router';

export interface Registration {
  name: string;
  email: string;
  id?: string;
}
export interface Response {
  code: number;
  message: string;
  data?: string;
}
