import { Component } from '@angular/core';

@Component({
  selector: 'app-basiscs-page',
  templateUrl: './basiscs-page.component.html',
  styleUrl: './basiscs-page.component.css'
})
export class BasiscsPageComponent {
  public nameLower: string = 'fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'fErNAndo hErReRa';

  public customDate: Date = new Date();
}
