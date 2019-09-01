import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare var ga: Function;

@Injectable()

export class AnalyticsService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  public event(eventCategory: string, eventAction: string, eventLabel: string) {
    if (isPlatformBrowser(this.platformId)) {
      ga('send', 'event', {
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
        eventValue: null
      });
    }
  }
}
