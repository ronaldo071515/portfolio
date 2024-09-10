import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent {

  public projects = signal([
    {
      name: 'Ecommerce Fake',
      url: 'https://eccommercefake.netlify.app',
      description: 'Ecommerce fake realizada con angular y consumiendo API de FakeStore',
      image: './assets/ecommerce1.png'
    },
    {
      name: 'Cotizador',
      url: 'https://monumental-conkies-2bdf19.netlify.app',
      description: 'Cotizador de criptomonedas usando JavaScript y consumiendo una API',
      image: './assets/cotizador.png'
    },
    {
      name: 'APV',
      url: 'https://chipper-empanada-285617.netlify.app',
      description: 'Administración de pacientes de veterinaria, fullstack: MERN',
      image: './assets/apv.png'
    },
    {
      name: 'Pipes Angular',
      url: 'https://symphonious-gumdrop-c92948.netlify.app',
      description: 'Aplicación realizada en el curso de angular para el uso de los pipes, usando PrimeNg',
      image: './assets/pipes.png'
    },
    {
      name: 'Buscador de Recetas',
      url: 'https://ronaldo-recetas.netlify.app',
      description: 'Buscador de comidas con JavaScript, consumiendo una api, y guardando en LocalStorage',
      image: './assets/comida.png'
    },
    {
      name: 'Aplicación Movil',
      url: 'https://play.google.com/store/apps/details?id=com.dev.appMovilSena',
      description: 'Aplicación Movil realizada con ionic, y node como backend',
      image: './assets/app.png'
    },
    {
      name: 'Página web',
      url: 'https://charming-cobbler-6cfe66.netlify.app',
      description: 'Página web hecha con sass, en curso de css y sass',
      image: './assets/podcast.png'
    },
    {
      name: 'Préstamos',
      url: 'https://inquisitive-frangollo-605735.netlify.app',
      description: 'Aplicación realizada como introducción a React',
      image: './assets/react.png'
    },
  ]);

}
