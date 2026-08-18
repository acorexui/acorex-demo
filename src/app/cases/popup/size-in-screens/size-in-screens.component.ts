import { Component } from '@angular/core';

type PopupSizeRow = {
  size: string;
  screen: string;
  width: string;
};

@Component({
  templateUrl: './size-in-screens.component.html',
})
export class PopUpSizeInScreenComponent {
  protected readonly rows: PopupSizeRow[] = [
    { size: 'SM', screen: 'Phone', width: '93vw' },
    { size: 'SM', screen: 'Tablet', width: '55vw' },
    { size: 'SM', screen: 'Desktop', width: '30vw' },
    { size: 'SM', screen: 'Desktop Large', width: '25vw' },
    { size: 'MD', screen: 'Phone', width: '93vw' },
    { size: 'MD', screen: 'Tablet', width: '65vw' },
    { size: 'MD', screen: 'Desktop', width: '50vw' },
    { size: 'MD', screen: 'Desktop Large', width: '40vw' },
    { size: 'LG', screen: 'Phone', width: '93vw' },
    { size: 'LG', screen: 'Tablet', width: '75vw' },
    { size: 'LG', screen: 'Desktop', width: '85vw' },
    { size: 'LG', screen: 'Desktop Large', width: '65vw' },
    { size: 'Full', screen: 'All Screen', width: '100vw' },
    { size: 'Fit', screen: 'All Screen', width: 'fit-content' },
  ];
}
