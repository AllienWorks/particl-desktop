import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingsComponent } from './listings/listings.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { AddItemComponent } from './sell/add-item/add-item.component';

export const market_routes_children = [
  { path: 'listings', component: ListingsComponent, data: { title: 'Listings' } },
  { path: 'buy', component: BuyComponent, data: { title: 'Buy' } },
  { path: 'sell', component: SellComponent, data: { title: 'Sell' } },
  { path: 'template', component: AddItemComponent, data: { title: 'Sell › Add/Edit item' } }
];

