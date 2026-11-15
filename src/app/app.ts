
import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
