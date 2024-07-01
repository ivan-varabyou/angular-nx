import {Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  standalone: true,
  imports: [RouterModule, MatCardModule, MatIconModule, MatButtonModule, MatDividerModule, MatSlideToggleModule, MatSidenav, MatSidenavContent, MatToolbar, MatSidenavContainer],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend-client'
}
