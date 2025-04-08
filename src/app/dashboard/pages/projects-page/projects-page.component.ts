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
      title: 'Maps App',
      desc: 'A small application showcasing MapLibre',
      githubLink: 'https://github.com/JBareaGallego/MapsApp',
      pageLink: 'https://jbareagallego.github.io/MapsApp/'
    },
    {
      title: 'AuthApp Frontend',
      desc: 'Frontend for an application involving authentication',
      githubLink: 'https://github.com/JBareaGallego/AuthApp-FrontEnd',
    },
    {
      title: 'AuthApp Nest Backend',
      desc: 'The backend for the AuthApp made on Nest',
      githubLink: 'https://github.com/JBareaGallego/AuthApp-Nest-Backend',
    },
    {
      title: 'Heroes App',
      desc: 'Application using a small dabatabase to show information for a wiki',
      githubLink: 'https://github.com/JBareaGallego/06-heroesApp',
    },
    {
      title: 'Counties App',
      desc: 'A small application for searching and shorting countries arround the world using Restcountries API',
      githubLink: 'https://github.com/JBareaGallego/Angular-CountryApp',
      pageLink: 'https://jbareagallego.github.io/Angular-CountryApp/'
    },
    {
      title: 'Signals App',
      desc: 'An app made while learning the use of signals and directives',
      githubLink: 'https://github.com/JBareaGallego/Directives-and-Signals',
    },
    {
      title: 'Forms App',
      desc: 'An app made while learning the use of forms in Angular',
      githubLink: 'https://github.com/JBareaGallego/07-formApp',
    },
    {
      title: 'Pipes App',
      desc: 'An app made while learning the use of pipes in Angular',
      githubLink: 'https://github.com/JBareaGallego/05-pipesApp',
    },
  ])


}
