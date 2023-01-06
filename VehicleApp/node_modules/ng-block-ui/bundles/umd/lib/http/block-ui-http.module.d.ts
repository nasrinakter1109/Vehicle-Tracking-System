import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { BlockUIHttpSettings } from './block-ui-http-settings.service';
import { HttpSettings } from '../models/block-ui-http-settings.model';
export declare const BlockUIHttpModuleSettings: InjectionToken<string>;
export declare function provideSettingsInstance(settings: HttpSettings): BlockUIHttpSettings;
export declare class BlockUIHttpModule {
    static forRoot(settings?: HttpSettings): ModuleWithProviders;
}
