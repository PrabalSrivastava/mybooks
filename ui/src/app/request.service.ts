import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Request } from "./request";
import { User } from "./user";

@Injectable ({
    providedIn: 'root'
})
export class RequestService {
    
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public addRequest(user: User): Observable<Request> {
        return this.http.post<Request>(`${this.apiServerUrl}/request/add`, user);
    }

    public getRequestsByUser(user: User): Observable<Request[]> {
        return this.http.post<Request[]>(`${this.apiServerUrl}/request/fetch`, user);
    }
}