import { Injectable } from '@angular/core';

@Injectable()
export class Helper {

  constructor() { }

  public static loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  public static percentAmount(amount: number, percent: number) {
    return (amount * percent) / 100;
  }
}
