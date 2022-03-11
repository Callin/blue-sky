import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private apiUrl = "/api/user";
  constructor(private httpClient: HttpClient) { }

  public getAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/all`);
  }
  public getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + "/" + id);
  }
  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }
  public editUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.apiUrl, user);
  }
}
