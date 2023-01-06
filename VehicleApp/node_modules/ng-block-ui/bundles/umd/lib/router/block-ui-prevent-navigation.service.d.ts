import { CanActivate, CanActivateChild } from '@angular/router';
import { BlockUIService } from '../services/block-ui.service';
export declare class BlockUIPreventNavigation implements CanActivate, CanActivateChild {
    private blockUIService;
    constructor(blockUIService: BlockUIService);
    canActivate(): boolean;
    canActivateChild(): boolean;
}
