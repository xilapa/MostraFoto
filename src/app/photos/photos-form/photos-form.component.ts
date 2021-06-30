import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { StateService } from 'src/app/core/state/state.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.css']
})
export class PhotosFormComponent implements OnInit, AfterViewInit, OnDestroy {

  private PhotosFormComponentInitialValues: IPhotosFormComponent = {
    imageFile: null,
    imagePath: '',
    imageTouched: false,
    description: '',
    allowComments: true
  }
  private subscriptions: Subscription = new Subscription();
  public photoForm: FormGroup;
  public set imageFile(image: File) {
    (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).imageFile = image;
  }
  public get imageFile(): File {
    return (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).imageFile;
  }
  public set imagePath(text: string) {
    (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).imagePath = text;
  }
  public get imagePath(): string {
    return (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).imagePath;
  }
  public set imageTouched(value: boolean) {
    (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).imageTouched = value;
  }
  public get imageTouched(): boolean {
    return (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).imageTouched;
  }
  public set description(text: string) {
    (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).description = text;
  }
  public get description(): string {
    return (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).description;
  }
  public set allowComments(value: boolean) {
    (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).allowComments = value;
  }
  public get allowComments(): boolean {
    return (this.stateService.state.PhotosFormComponent as IPhotosFormComponent).allowComments;
  }
  @ViewChild('imagemParaUpload') imagemParaUploadElement: ElementRef<HTMLImageElement>;

  constructor(
    private formBuilder: FormBuilder,
    private platformDetectorService: PlatformDetectorService,
    private photoService: PhotoService,
    private router: Router,
    private stateService: StateService) {
    // checa se state do PhotosFormComponent foi iniciado e se foi pega os valores de lá para initial values
    if (!!this.stateService.state.PhotosFormComponent)
      this.PhotosFormComponentInitialValues = this.stateService.state.PhotosFormComponent;
    else
      this.stateService.state.PhotosFormComponent = this.PhotosFormComponentInitialValues;
  }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group(
      {
        description: [this.description, [Validators.required, Validators.maxLength(300)]],
        allowComments: [this.allowComments]
      }
    );
  }
  ngAfterViewInit(): void {
    this.setImageFile(this.imageFile);
    this.listenToFormValuesChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions && this.subscriptions.unsubscribe();
  }

  // recebe ou um evento do componente ou um arquivo do after view init
  setImageFile(input: Event | File): void {
    if (input instanceof Event && (input.target as HTMLInputElement).files.length > 0) {
      this.imageFile = (input.target as HTMLInputElement).files[0];
      this.imagePath = (input.target as HTMLInputElement).files[0].name;
    }

    if (input instanceof File) this.imageFile = input;

    if (!!this.imageFile) {
      this.imagemParaUploadElement.nativeElement.src = URL.createObjectURL(this.imageFile);
      this.imagemParaUploadElement.nativeElement.removeAttribute('hidden');
    } 
  }

  listenToFormValuesChanges(): void {
    const descSubs = this.photoForm.get('description').valueChanges.subscribe(
      (value) => this.description = value
    );
    this.subscriptions.add(descSubs);
    const allowCommentsSubs = this.photoForm.get('allowComments').valueChanges.subscribe(
      (value) => this.allowComments = value
    );
    this.subscriptions.add(allowCommentsSubs);
  }

  upload(): void {
    let values = this.photoForm.getRawValue();
    values.image = this.imageFile;
    const photoServiceUploadSubs = this.photoService.upload(values.description, values.allowComments, values.image)
      .subscribe(() => this.router.navigate(['']));
    this.subscriptions.add(photoServiceUploadSubs);
    this.clearForm();
  }

  clearForm(): void {
    this.photoForm.reset({
      allowComments: true,
      description: ''
    })

    this.imageFile = null;
    this.imagePath = '';
    this.imageTouched = false;
    this.setImageFile(this.imageFile);
  }

  isFormInvalid(): boolean {
    return this.photoForm.invalid || !this.imageFile;
  }

  isImageInvalid(): boolean {
    return !this.imageFile && this.imageTouched;
  }

}

export interface IPhotosFormComponent {
  imageFile: File;
  imagePath: string;
  imageTouched: boolean;
  description: string;
  allowComments: boolean;
}