import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../../state/examples.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  constructor(private exampleService: ExamplesService) { this.exampleService.loadExamples().subscribe(s => console.log(s)); }
  ngOnInit() {}
}
