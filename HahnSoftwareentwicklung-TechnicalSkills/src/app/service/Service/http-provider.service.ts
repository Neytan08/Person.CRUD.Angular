import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:7233/";

var httpLink = {
  getAllPerson: apiUrl + "api/Person",
  deletePersonById: apiUrl + "api/Person/",
  getPersonById: apiUrl + "api/Person/",
  savePerson: apiUrl + "api/Person"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllPerson(): Observable<any> {
    return this.webApiService.get(httpLink.getAllPerson);
  }
  public deletePersonById(id: number): Observable<any> {
    return this.webApiService.delete(httpLink.deletePersonById + id);
  }
  public getPersonById(id: number): Observable<any> {
    return this.webApiService.get(httpLink.getPersonById + id);
  }
  public savePerson(model: any): Observable<any> {
    return this.webApiService.post(httpLink.savePerson, model);
  } 
}
