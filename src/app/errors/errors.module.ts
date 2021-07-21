import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { GlobalErrorHandling } from './globalErrorHandling/global-error-handling';



@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandling
    }
  ]
})
export class ErrorsModule { }
