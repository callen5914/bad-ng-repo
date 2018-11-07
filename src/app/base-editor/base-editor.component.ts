import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-editor',
  templateUrl: './base-editor.component.html',
  styleUrls: ['./base-editor.component.css']
})
export class BaseEditorComponent implements OnInit {

  baseName = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
