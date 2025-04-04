import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class PingService {
    constructor(private http: HttpClient) {}

    ping() {
        return this.http.get<{ message: string }>(`${environment.apiUrl}/ping`);
    }
}
