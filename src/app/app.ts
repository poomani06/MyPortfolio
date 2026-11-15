
import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
