import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectDisplayComponent implements OnInit {
  constructor(private route: ActivatedRoute, private renderer: Renderer2) {}
  public id: string = '';
  public projecttext: string = '';
  public projecttitle: string = '';
  public projecturl: string = '';
  public projects = {
    vinyle: {
      title: 'Vinyle',
      tagline:
        "Vinyle - A wordle like game where you guess the name of an album based on a pixelated image of the album's cover.",
      development: [
        'I began developing Vinyle because I was interested in creating an online game based on the popular "Wordle" format. ' +
          'I started the project by planning out the intended features of the application. ',
        'The features I wanted to include were - \n Album cover pixelation, guessing the name of an album under a time limit with a limited number of guesses, new games playable everyday, ' +
          "date selection for the games, current game progress saved, and sharing the results of today's game.",
        'Completing the first requirement was much more difficult than I anticipated. I had assumed that CSS would have a built in property for image pixelation, but this was not possible. ' +
          'The solution instead, was to use a canvas object, load a shrunken image onto the canvas, and then gradually increase the size of the image over the course of 20 seconds.',
        'The second requirement was solved using watchers. ' +
          'Watchers allow the program to react to changes. For Vinyle, watchers are used to detect when the user has guessed, and to detect the 20 second timer ticking down. When changes are detected, the program will react accordingly. ' +
          'In the case of the timer, the program will pixelate the image with the new width and height of the source image. ' +
          'For the guesses, the program will either set the game to a win-state if the guess is correct, or detract a guess if incorrect, and if the guesses reach zero, the game is set to a loss state.',
        'The third requirement was accomplished using a database. The database that is used for the game is a MongoDB database. On this database, there is a collection of album objects, each object is comprised of an ID, an album name, the date the game will be available on in miliseconds rounded to the beginning of the day, and an index. ' +
          "The date is the important part, on loading the site, the database is queried for today's game using today's date rounded to the beginning of the day, and all the necessary data to run the game is sent back. ",
        "The date selection was accomplished by using a date input field. When a date is selected, the database is queried for that specific day's game, however, you are unable to select any days past the current day.",
        "Progress for the latest game is saved to the browser's local storage. If the today'\s date is selected, the local storage is checked to determine whether it has already been completed, if so, the results will be loaded, and the completion screen will be shown instead of the game." +
          'On a new game being available, the local storage that contains the previously played game is wiped.',
          'A results screen is displayed when a user has completed the latest game. This screen will display a modal, that will contain the user\'s results from today\'s game.'
      ],
    },
    imagetobraille: {
      title: 'Image to Braille',
      tagline: 'This is the tagline for image to braille',
      development: 'this is how image to braille was developed',
    },
  };
  public projectDevelopment: string = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }
}
