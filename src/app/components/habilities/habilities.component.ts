import { Component, computed, signal } from '@angular/core';

export interface Languges {
  name: string
  range: number;
  icon: string;
  style: string;
  class?: string;
}

export interface Interests {
  name: string;
  icon: string;
}

export interface Tools {
  name: string
  range: number;
  icon: string;
  style: string;
  class?: string;
}

@Component({
  selector: 'app-habilities',
  standalone: true,
  imports: [],
  templateUrl: './habilities.component.html',
  styles: ``
})


export class HabilitiesComponent {
  
  public languages = signal<Languges[]>([
    {
      name: 'HTML5',
      range: 70,
      icon: 'fab fa-html5',
      class: "w-8/12 bg-orange-600 rounded-lg h-2",
      style: 'icon-html'
    },
    {
      name: 'CSS3',
      range: 20,
      icon: 'fab fa-css3-alt',
      class: "w-1/5 bg-sky-600 rounded-lg h-2",
      style: 'icon-css'
    },
    {
      name: 'JavaScript',
      range: 80,
      icon: 'fab fa-js',
      class: "w-4/5 bg-yellow-300 rounded-lg h-2",
      style: 'icon-js'
    },
    {
      name: 'PHP',
      range: 20,
      icon: 'fab fa-php',
      class: "w-1/5 bg-indigo-600 rounded-lg h-2",
      style: 'icon-php'
    },
    {
      name: 'JAVA',
      range: 40,
      icon: 'fab fa-java',
      class: "w-2/5 bg-orange-300 rounded-lg h-2",
      style: 'icon-jv'
    },
    {
      name: 'NodeJs',
      range: 70,
      icon: 'fab fa-node-js',
      class: "w-8/12 bg-green-500 rounded-lg h-2",
      style: 'icon-node'
    },
    {
      name: 'Angular',
      range: 70,
      icon: 'fab fa-angular',
      class: "w-8/12 bg-red-600 rounded-lg h-2",
      style: 'icon-ang'
    },
    {
      name: 'Postgresql - Mysql',
      range: 20,
      icon: 'fas fa-database',
      class: "w-1/5 bg-indigo-600 rounded-lg h-2",
      style: 'icon-sql'
    }
  ]);

  public otherInterests = signal<Interests[]>([
    {
      name: 'Lectura',
      icon: 'fab fa-readme',
    },
    {
      name: 'Deportes',
      icon: 'fas fa-running'
    },
    {
      name: 'Video Juegos',
      icon: 'fas fa-gamepad'
    },
    {
      name: 'Musica',
      icon: 'fas fa-music'
    }
  ]);

  public tools = signal<Tools[]>([
    {
      name: 'POSTMAN',
      range: 40,
      icon: 'fas fa-user-astronaut',
      style: 'icon-post',
      class: "w-2/5 bg-orange-300 rounded-lg h-2"
    },
    {
      name: 'VSCODE',
      range: 70,
      icon: 'fas fa-code',
      style: 'icon-vs',
      class: "w-8/12 bg-gray-700 rounded-lg h-2"
    },
    {
      name: 'GIT',
      range: 40,
      icon: 'fab fa-github',
      style: '',
      class: "w-2/5 bg-gray-900 rounded-lg h-2"
    },
  ]);

}
