import {Component} from '@angular/core';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BodyComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
