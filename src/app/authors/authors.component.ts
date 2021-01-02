import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  constructor() { }

  @Input() label?: string;

  ngOnInit(): void {
  }

}
