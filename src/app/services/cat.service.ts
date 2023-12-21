import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


interface RootObject {
    current_page: number;
    data: Datum[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to: number;
    total: number;
  }
  interface Link {
    url?: string;
    label: string;
    active: boolean;
  }
  interface Datum {
    breed: string;
    country: string;
    origin: string;
    coat: string;
    pattern: string;
  }

@Injectable({
    providedIn: 'root',
})
export class CatService {
    constructor(private http: HttpClient) {}

    getCats(page:number):Observable<any> {
        return this.http.get(`${environment.baseUrl}/breeds?page=${page}`);
    }

    getAllCats():Observable<any> {
        return this.http.get(`${environment.baseUrl}/breeds?limit=99`);
    }

}