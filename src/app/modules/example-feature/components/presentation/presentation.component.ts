import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../../state/examples.service';
import { ExamplesQuery } from '../../state/examples.query';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  constructor(private examplesQuery: ExamplesQuery, private exampleService: ExamplesService) {
    // Just an example for akita services/queries usage
    // A presentational component shouldn't be concerned
    // with data fetching logic.
    this.exampleService.loadExamples().subscribe();

    // You can also bound this observable to a variable
    // and use it with an async pipe on template
    this.examplesQuery.examples$.subscribe((examples) => {
      console.log(examples);
    });
  }
  ngOnInit() {}
}
