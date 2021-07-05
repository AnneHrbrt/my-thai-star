import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Tile } from '../../components/home-card/home-card.component';
import * as fromRoot from '../../../store';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-public-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tiles: HomePageTiles = {
    restaurant: {
      titleKey: 'home.restaurantTitle',
      contentKey: 'home.restaurantContent',
      caption: 'home.restaurantImage',
      img: '',
      buttonLabelKey: 'buttons.bookTable',
      navigate: () => this.navigateTo('survey'),
    },
  };

  constructor(private router: Router, private store: Store<fromRoot.State>, title: Title) {
    title.setTitle('Home');
  }

  navigateTo(route: string): void {
    this.store.dispatch(fromRoot.go({ path: [route] }));
  }

  getTiles(): TileWithNavigation[] {
    return Object.keys(this.tiles).map((key) => this.tiles[key]);
  }
}

interface TileWithNavigation extends Tile {
  navigate: () => void;
}

interface HomePageTiles {
  restaurant: TileWithNavigation;
}
