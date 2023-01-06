import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/retry';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    remember = false;
    constructor() {
        const rememberMe = localStorage.getItem('remember');
        if (rememberMe) {
            if (rememberMe === 'true') {
                this.remember = true;
            }
        }
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = null;
        if (this.remember) {
            token = localStorage.getItem('token');
        } else {
            token = sessionStorage.getItem('token');
        }
        if (token) {
            request = request.clone({
                setHeaders: { 'Authorization': 'Bearer ' + token }
            });
        }

        return next.handle(request).retry(1);
    }
}
