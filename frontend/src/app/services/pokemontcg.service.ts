import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';

@Injectable({providedIn: 'root'})
export class PokemonService {
    constructor(private http: HttpClient) {
    }

    fetchSets(params?: any): Observable<any> {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach(key => {
                httpParams = httpParams.set(key, params[key]);
            });
        }
        return this.http.get(`${environment.apiUrl}/pokemontcg/sets`, {params: httpParams});
    }

    fetchCards(params?: any): Observable<any> {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach(key => {
                httpParams = httpParams.set(key, params[key]);
            });
        }
        return this.http.get(`${environment.apiUrl}/pokemontcg/cards`, {params: httpParams});
    }
}
