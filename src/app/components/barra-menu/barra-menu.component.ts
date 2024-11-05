import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(private readonly authService: AuthService){}

  logout(){
    this.authService.logout()
  }
}
