import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BlockUIService } from '../services/block-ui.service';
import { BlockUIHttpSettings } from './block-ui-http-settings.service';
export declare class BlockUIInterceptor implements HttpInterceptor {
    private blockUIService;
    private BlockUIHttpSettings;
    private settings;
    constructor(blockUIService: BlockUIService, BlockUIHttpSettings: BlockUIHttpSettings);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    shouldBlock(request: HttpRequest<any>): boolean;
}
