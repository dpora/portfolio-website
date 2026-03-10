import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Hero, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
