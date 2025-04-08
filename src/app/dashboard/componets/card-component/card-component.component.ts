import { Component, Input, OnInit, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon'
import { projectCardData } from '../../../interfaces/project-card.interface';

@Component({
  selector: 'app-card-component',
  imports: [MatExpansionModule,
            MatIconModule
  ],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent{

  @Input()
  projectData : projectCardData = {
    title: 'No Title',
    desc: 'No Description',
    githubLink: 'NoLink'
  }

}
