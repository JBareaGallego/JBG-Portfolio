import { Component, signal } from '@angular/core';
import { CardComponentComponent } from "../../componets/card-component/card-component.component";
import { projectCardData } from '../../../interfaces/project-card.interface';

@Component({
  selector: 'app-projects-page',
  imports: [CardComponentComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export default class ProjectsPageComponent {

  projects = signal<projectCardData[]>([
    {
      title: $localize`map`,
      desc: $localize`A small application showcasing MapLibre`,
      githubLink: `https://github.com/JBareaGallego/MapsApp`,
      pageLink: `https://jbareagallego.github.io/MapsApp/`
    },
    {
      title: $localize`AuthApp Frontend`,
      desc: $localize`Frontend for an application involving authentication`,
      githubLink: `https://github.com/JBareaGallego/AuthApp-FrontEnd`,
    },
    {
      title: $localize`AuthApp Nest Backend`,
      desc: $localize`The backend for the AuthApp made on Nest`,
      githubLink: `https://github.com/JBareaGallego/AuthApp-Nest-Backend`,
    },
    {
      title: $localize`Heroes App`,
      desc: $localize`Application using a small dabatabase to show information for a wiki`,
      githubLink: `https://github.com/JBareaGallego/06-heroesApp`,
    },
    {
      title: $localize`Counties App`,
      desc: $localize`A small application for searching and shorting countries arround the world using Restcountries API`,
      githubLink: `https://github.com/JBareaGallego/Angular-CountryApp`,
      pageLink: `https://jbareagallego.github.io/Angular-CountryApp/`
    },
    {
      title: $localize`Signals App`,
      desc: $localize`An app made while learning the use of signals and directives`,
      githubLink: `https://github.com/JBareaGallego/Directives-and-Signals`,
    },
    {
      title: $localize`Forms App`,
      desc: $localize`An app made while learning the use of forms in Angular`,
      githubLink: `https://github.com/JBareaGallego/07-formApp`,
    },
    {
      title: $localize`Pipes App`,
      desc: $localize`An app made while learning the use of pipes in Angular`,
      githubLink: `https://github.com/JBareaGallego/05-pipesApp`,
    },
  ])


}
