import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { User } from "./user";

@Injectable ({
    providedIn: 'root'
})
export class UserService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public signupLoginUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
    }
}