import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../../state/examples.service';
import { ExampleRepository } from '../../state/examples.repository';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  constructor(private examplesRepository: ExampleRepository, private exampleService: ExamplesService) {
    // Just an example for elf repository usage
    // A presentational component shouldn't be concerned
    // with data fetching logic.
    this.exampleService.loadExamples().subscribe();

    // You can also bound this observable to a variable
    // and use it with an async pipe on template
    this.examplesRepository.examples$.subscribe((examples) => {
      console.log(examples);
    });
  }

  ngOnInit() {}
}
