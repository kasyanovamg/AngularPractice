import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {

  constructor() { }

  @Input() label?: string;

  public value?: number;

  ngOnInit(): void {
  }

  public onChange(event: any): void {
    this.value = event.target.value;
  }

}
