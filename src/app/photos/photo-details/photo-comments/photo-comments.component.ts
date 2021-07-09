import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IPhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'mf-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;
  photoComments$: Observable<IPhotoComment[]>;
  commentForm: FormGroup;

  constructor(private photoService: PhotoService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.photoComments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment : ['', Validators.maxLength(300)]
    })
  }

  saveComment(): void {
    let comment = this.commentForm.get('comment').value;
    this.photoComments$ = this.photoService.postComment(this.photoId, comment).pipe(
      switchMap( () => this.photoService.getComments(this.photoId))
    ).pipe(
      tap(() => this.commentForm.reset())
    )
  }

}
