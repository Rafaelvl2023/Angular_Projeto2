import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TesteComponent } from './teste/teste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TesteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataplace';
}
