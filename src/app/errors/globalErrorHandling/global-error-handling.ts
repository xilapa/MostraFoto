import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class GlobalErrorHandling implements ErrorHandler {
    constructor(private injector: Injector) {}
    handleError(error: any): void {
        let location = this.injector.get(LocationStrategy);
        let url = location instanceof PathLocationStrategy ? location.path() : 'raiz';
        let url2 = window.location.href;
        console.log("erros tratados");
        console.log(error.message, url, url2);
    }

}