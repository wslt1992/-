import { Component, AfterViewInit } from '@angular/core';
import 'hammerjs';
import {WOW} from '../assets/js/wow/wow.js'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    new WOW().init();
  }
  title = 'app';
}
