import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
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

    listFromUserPaginated(username: string, page: number) : Observable<IPhoto[]>
    {
        const params = new HttpParams().append('page',page.toString());
        return this.http.get<IPhoto[]>(`http://localhost:3000/${username}/photos`, { params }).pipe(
            catchError(this.handleError)
        );

    }

    upload(description: string, allowComments: boolean, image: File) : Observable<any> {
        let formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', image);
        return this.http.post(`http://localhost:3000/photos/upload`, formData);
    }

    getById(photoId: string): Observable<IPhoto> {
        return this.http.get<IPhoto>(`http://localhost:3000/photos/${photoId}`);
    }

    handleError(err: HttpErrorResponse){
        console.log(err.error.message);
        return throwError(err);
    }
}

