import { HttpClient, HttpErrorResponse, HttpEvent, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { IPhoto } from "./photo";
import { IPhotoComment } from './photo-comment';

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

    upload(description: string, allowComments: boolean, image: File) : Observable<HttpEvent<any>> {
        let formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', image);
        return this.http.post(`http://localhost:3000/photos/upload`, formData, { observe: 'events', reportProgress: true });
    }

    getById(photoId: number): Observable<IPhoto> {
        return this.http.get<IPhoto>(`http://localhost:3000/photos/${photoId}`);
    }

    getComments(photoId: number): Observable<IPhotoComment[]>{
        return this.http.get<IPhotoComment[]>(`http://localhost:3000/photos/${photoId}/comments`);
    }


    postComment(photoId: number, commentText: string): Observable<any> {
        return this.http.post(`http://localhost:3000/photos/${photoId}/comments`, { commentText });
    }

    removePhoto(photoId: number) : Observable<any>{
        return this.http.delete(`http://localhost:3000/photos/${photoId}`);
    }

    likePhoto(photoId: number): Observable<boolean>{
        return this.http.post(`http://localhost:3000/photos/${photoId}/like`, {}, { observe: 'response' })
            .pipe(map(() => true))
            .pipe(catchError(err => err.status == '304' ? of(false) : throwError(err)));

    }

    handleError(err: HttpErrorResponse){
        console.log(err.error.message);
        return throwError(err);
    }
}

