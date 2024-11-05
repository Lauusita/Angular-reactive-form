import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-barra-menu',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './barra-menu.component.html',
  styleUrl: './barra-menu.component.css',
})
export class BarraMenuComponent {
  logo = "assets/logo.png"
  logged = false
}
