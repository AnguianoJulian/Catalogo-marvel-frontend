import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  correo: string = 'julian.anguiano23b@udgvirtual.udg.mx'; // tu correo

  constructor() { }

  ngOnInit(): void {
  }

}

