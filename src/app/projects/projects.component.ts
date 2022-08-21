import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Vinyle',
      description:
        'Vinyle is an online game where users must guess an album name from a pixelated album cover.',
      tech: 'Node.js, Vue.js, Express, MongoDB',
      github: 'https://github.com/Ciaran98/Vinyle',
      live: 'https://vinyle-game.herokuapp.com/#/',
    },
    {
      name: 'Image to Braille',
      description:
        'Image to Braille is a site that allows users to convert any image into a braille representaion of that image.',
      tech: 'Node.js, Vue.js, Express',
      github: 'https://github.com/Ciaran98/ImageToBraille',
      live: 'https://braille-image.herokuapp.com/#/',
    },
    {
      name: 'Apex Randomiser',
      description:
        'Character, Loadout, and map drop point randomiser for the popular video game "Apex Legends" ',
      tech: 'Node.js,Angular,Google Firebase',
      github: 'https://github.com/Ciaran98/apexrandom',
      live: 'https://apexrandom.web.app/',
    },
  ];
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Projects');
  }
}
