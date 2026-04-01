import {
  CountryItem,
  COUNTRIES,
  COUNTRIES_FLAG_BASE64,
} from '@acorex/core/constants';
import { NgStyle, UpperCasePipe } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { AXButtonComponent } from '@acorex/components/button';

@Component({
  templateUrl: 'select-one.component.html',
  imports: [NgStyle, UpperCasePipe, AXButtonComponent],
})
export class SelectOneComponent {
  // Constants
  countries: CountryItem[] = COUNTRIES;
  flagSprite: string = COUNTRIES_FLAG_BASE64;

  // Signals for reactive state
  selectedCountry = signal<CountryItem | null>(null);

  // Computed countries (limited to 20, only with flags)
  displayedCountries = computed(() => {
    // Filter countries that have flags (bkPosition property)
    const countriesWithFlags = this.countries.filter(
      (country) => country.bkPosition
    );

    // Sort by priority first, then by name
    const sorted = countriesWithFlags.sort((a, b) => {
      if (a.orderPriority !== undefined && b.orderPriority !== undefined) {
        return a.orderPriority - b.orderPriority;
      }
      if (a.orderPriority !== undefined) return -1;
      if (b.orderPriority !== undefined) return 1;
      return a.name.localeCompare(b.name);
    });

    // Limit to 20 countries
    return sorted.slice(0, 20);
  });

  // Select a country
  selectCountry(country: CountryItem): void {
    this.selectedCountry.set(country);
  }

  // Clear selection
  clearSelection(): void {
    this.selectedCountry.set(null);
  }

  // Get formatted phone number example
  getFormattedPhone(country: CountryItem): string {
    if (!country.format) return 'N/A';

    // Replace 0s with example digits
    return country.format.replace(/0/g, (match, index) => {
      return Math.floor(Math.random() * 10).toString();
    });
  }

  // Get area codes as string
  getAreaCodes(country: CountryItem): string {
    if (!country.areaCodes || country.areaCodes.length === 0) {
      return 'N/A';
    }

    // Show first 5 area codes, or all if less than 5
    const codes = country.areaCodes.slice(0, 5);
    const more =
      country.areaCodes.length > 5
        ? ` (+${country.areaCodes.length - 5} more)`
        : '';
    return codes.join(', ') + more;
  }
}
