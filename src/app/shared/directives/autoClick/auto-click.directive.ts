import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { StateService } from 'src/app/core/state/state.service';
import { IPhotosFormComponent } from 'src/app/photos/photos-form/photos-form.component';

@Directive({
  selector: '[appAutoClick]'
})
export class AutoClickDirective implements OnInit{

  constructor(
    private platformDetectorService: PlatformDetectorService,
    private el: ElementRef<HTMLElement>,
    private stateService: StateService
  ) { }

  ngOnInit(): void {
    if (this.platformDetectorService.isBrowser() &&
      !(this.stateService.state.PhotosFormComponent as IPhotosFormComponent).imageTouched)
      this.el.nativeElement.click();
  }

}
