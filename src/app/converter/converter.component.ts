import { Component, OnInit } from '@angular/core';
import * as converter from 'number-to-words';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mynumber: number = 0;
  outputWords = ''
  convertToWord() {
    this.outputWords = converter.toWords(this.mynumber);

  }
}
