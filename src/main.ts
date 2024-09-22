import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CartService } from './app/services/cart.service';
import { StoreService } from './app/services/store.service';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, MatSidenavModule, MatGridListModule, MatMenuModule, MatButtonModule, MatCardModule, MatIconModule, MatExpansionModule, MatTreeModule, MatListModule, MatToolbarModule, MatTableModule, MatBadgeModule, MatSnackBarModule),
        provideHttpClient(),
        provideAnimationsAsync(),
        CartService,
        StoreService
    ]
})
  .catch(err => console.error(err));
