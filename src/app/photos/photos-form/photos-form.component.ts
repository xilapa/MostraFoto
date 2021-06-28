import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.css']
})
export class PhotosFormComponent implements OnInit, OnDestroy {

  // salvar dados com um data service

  private _imageFile: File;
  public subscriptions: Subscription;
  public hasImage(): boolean {
    return !!this._imageFile;
  }
  public photoForm: FormGroup;
  @ViewChild('imagemParaUpload') imagemParaUploadElement: ElementRef<HTMLImageElement>;

  constructor(
    private formBuilder: FormBuilder,
    private platformDetectorService: PlatformDetectorService,
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group(
      {
        image: ['', [Validators.required]],
        description: ['', [Validators.required, Validators.maxLength(300)]],
        allowComments: [true]
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions && this.subscriptions.unsubscribe();
  }
  setImageFile(event: Event): void {
    if (this.platformDetectorService.isBrowser()) {
      this._imageFile = (event.target as HTMLInputElement).files[0];
      if (!!this._imageFile) {
        this.imagemParaUploadElement.nativeElement.src = URL.createObjectURL(this._imageFile);
        this.imagemParaUploadElement.nativeElement.removeAttribute('hidden');
      } else {
        this.imagemParaUploadElement.nativeElement.src = '';
        this.imagemParaUploadElement.nativeElement.setAttribute('hidden', '');
      }
    }
  }

  upload(): void {
    let values = this.photoForm.getRawValue();
    values.image = this._imageFile;
    this.subscriptions = this.photoService.upload(values.description, values.allowComments, values.image)
      .subscribe(() => this.router.navigate(['']));
    // redirecionar para a tela inicial
  }


}
