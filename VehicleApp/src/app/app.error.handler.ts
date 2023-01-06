import { ErrorHandler, Injectable, Input, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppErrorHandler extends ErrorHandler {


    constructor(private injector: Injector) {
        super();
    }
    handleError(error: Error | HttpErrorResponse) {

        const toaster = this.injector.get(ToastrService);
        const router = this.injector.get(Router);
        if (error instanceof HttpErrorResponse) {

            // Server or connection error happened
            toaster.toastrConfig.preventDuplicates = true;
            toaster.toastrConfig.onActivateTick = true;
            if (!navigator.onLine) {
                // Handle offline error
                return toaster.error('Check your internet connection');
            } else {
                // Handle Http Error (error.status === 403, 404...)
                if (error.status === 0) {
                    return toaster.error('No response from server');
                } else {
                    return toaster.error(`${error.status} - ${error.message}`);
                }
            }
        } else {
            // Handle Client Error (Angular Error, ReferenceError...)
            sessionStorage.setItem('error', error.message);
            router.navigate(['/error']);
        }
    }
}
