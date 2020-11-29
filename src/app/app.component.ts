import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first angular';

  // understanding ordering on lifecycle hooks

  // ngOnChanges(): void {
  //   console.log("ngOnChanges()");
  // }

  // ngOnInit(): void {
  //   console.log("ngOnInit()");
  // }

  // ngDoCheck(): void {
  //   console.log("ngDoCheck()");
  // }

  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit()");
  // }

  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked()");
  // }

  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit()");
  // }

  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked()");
  // }

  // ngOnDestroy(): void {
  //   console.log("ngOnDestroy()");
  // }

}
