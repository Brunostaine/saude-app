import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router: Router) {

    }
    showFiller = false;

    onPacientes(){
        this.router.navigate(['/pacientes'])
        
    }
}

