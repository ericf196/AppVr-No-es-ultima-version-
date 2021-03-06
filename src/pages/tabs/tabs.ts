import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {FavoritePage} from "../favorite/favorite";
import {TestPage} from "../test/test";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = FavoritePage;
  tab5Root = TestPage;

  constructor() {

  }
}
