import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private apiUrl = "localhost:8081/api/user";
  constructor(private httpClient: HttpClient) { }

  public getAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/all`);
  }
}
