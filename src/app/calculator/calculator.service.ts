import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  ApiUrl:string = 'http://localhost:8080/v2/calculate/';
  
  constructor(private httpClient:HttpClient ) { }

  calculate(option:any, body:any)
  {
    return this.httpClient.post<any>(this.ApiUrl+option,body);
  }
}
