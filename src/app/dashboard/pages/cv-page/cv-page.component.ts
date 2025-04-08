import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon'

@Component({
  selector: 'app-cv-page',
  imports: [  MatGridListModule,
              MatIcon
  ],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.css'
})
export default class CvPageComponent {

}
