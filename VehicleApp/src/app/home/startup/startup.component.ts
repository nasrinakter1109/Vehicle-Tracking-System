import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styles: []
})
export class StartupComponent {

  public response: string;

  statesDate: Observable<any[]>;
  constructor() {
    }



}
