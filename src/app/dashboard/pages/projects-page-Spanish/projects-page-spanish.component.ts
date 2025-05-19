import { Component, signal } from '@angular/core';
import { CardComponentComponent } from "../../componets/card-component/card-component.component";
import { projectCardData } from '../../../interfaces/project-card.interface';

@Component({
  selector: 'app-projects-page-spanish',
  imports: [CardComponentComponent],
  templateUrl: './projects-page-spanish.component.html',
  styleUrl: './projects-page-spanish.component.css'
})
export default class ProjectsPageComponent {

  projects = signal<projectCardData[]>([
    {
      title: $localize`Aplicación de Mapas`,
      desc: $localize`Una pequeña aplicación mostrando las funcionalidades de MapLibre`,
      githubLink: `https://github.com/JBareaGallego/MapsApp`,
      pageLink: `https://jbareagallego.github.io/MapsApp/`
    },
    {
      title: $localize`Frontend de AuthApp`,
      desc: $localize`Frontend para una aplicación de autenticación.`,
      githubLink: `https://github.com/JBareaGallego/AuthApp-FrontEnd`,
    },
    {
      title: $localize`Backend en Nest para AuthApp `,
      desc: $localize`El backend para la aplicación de autenticación.`,
      githubLink: `https://github.com/JBareaGallego/AuthApp-Nest-Backend`,
    },
    {
      title: $localize`App de superhéroes `,
      desc: $localize`Pequeña aplicación para mostrar información sobre superhéroes basada en una base de datos.`,
      githubLink: `https://github.com/JBareaGallego/06-heroesApp`,
    },
    {
      title: $localize`Aplicación de Países `,
      desc: $localize`Aplicaciónpara buscar información sobre países basada en la API de Restcountries.`,
      githubLink: `https://github.com/JBareaGallego/Angular-CountryApp`,
      pageLink: `https://jbareagallego.github.io/Angular-CountryApp/`
    },
    {
      title: $localize`Aplicación de Señales`,
      desc: $localize`Aplicación creada para aprender el uso de señales y directivas en Angular.`,
      githubLink: `https://github.com/JBareaGallego/Directives-and-Signals`,
    },
    {
      title: $localize`Aplicación de Formularios `,
      desc: $localize`Aplicación creada para aprender el uso de formularios en Angular.`,
      githubLink: `https://github.com/JBareaGallego/07-formApp`,
    },
    {
      title: $localize`Aplicación de Pipes `,
      desc: $localize`Aplicación creada para aprender el uso de pipes en Angular.`,
      githubLink: `https://github.com/JBareaGallego/05-pipesApp`,
    },
  ])


}
