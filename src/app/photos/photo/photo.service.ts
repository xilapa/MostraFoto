import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { IPhoto } from "./photo";

@Injectable({ providedIn: 'root'})
export class PhotoService{
    constructor(private http: HttpClient){ }

    listFromUser(username: string) : Observable<IPhoto[]>
    {
        return this.http.get<IPhoto[]>(`http://localhost:3000/${username}/photos`).pipe(
            catchError(this.handleError)
        );

    }

    handleError(err: HttpErrorResponse){
        console.log(err.error.message);
        return throwError(err);
    }
}

