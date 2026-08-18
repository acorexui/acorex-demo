import {
  CountryItem,
  COUNTRIES,
  COUNTRIES_FLAG_BASE64,
} from '@acorex/core/constants';
import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [NgStyle],
})
export class UsageComponent {
  countries: CountryItem[] = COUNTRIES;
  flagSprite: string = COUNTRIES_FLAG_BASE64;
}
