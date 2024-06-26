import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
	selector: 'app-heroes',
	standalone: true,
	imports: [CommonModule, HeroDetailComponent, RouterModule],
	templateUrl: './heroes.component.html',
	styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
	selectedHero?: Hero;

	heroes: Hero[] = [];

	constructor(
		private heroService: HeroService,
		private messageService: MessageService,
	) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
	}

	getHeroes(): void {
		this.heroService.getHeroes().subscribe((res) => (this.heroes = res));
	}
}
