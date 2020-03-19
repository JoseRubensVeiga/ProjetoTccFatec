import { fromEvent, Observable, Subscription, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  screenSizes = {
    small: 600,
    medium: 900,
    large: 1200
  }

  constructor() {
  }

  isActive(size: string): Observable<boolean> {
    return fromEvent(window, 'resize').pipe(
      map((event: any) => {
        return this.getScreenType(event.target.innerWidth) === size;
      })
    );
  }

  getScreenType(screenWidth: number): string {
    for(let key in this.screenSizes) {
      const element = this.screenSizes[key];

      if(screenWidth < element) {
        return key;
      }
    }
    const lastSize = Object.keys(this.screenSizes);
    return lastSize[lastSize.length - 1];
  }
  
}
