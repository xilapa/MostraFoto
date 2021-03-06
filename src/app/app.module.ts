import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestInterceptorService } from './core/auth/request.interceptor';
import { FooterModule } from './core/footer/footer.module';
import { HeaderModule } from './core/header/header.module';
import { ErrorsModule } from './errors/errors.module';
import { PhotoDetailsModule } from './photos/photo-details/photo-details.module';
import { PhotosModules } from './photos/photos.module';
import { TestModule } from './tooltipCSS/tooltipCSS.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModules,
    ErrorsModule,
    HeaderModule,
    FooterModule,
    TestModule,
    AppRoutingModule,
    PhotoDetailsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
