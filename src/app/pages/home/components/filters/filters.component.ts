import {
  Component, EventEmitter, OnDestroy, OnInit, Output
} from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from '../../../../services/store.service';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatSelectionList, MatListOption } from '@angular/material/list';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  standalone: true,
  imports: [MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatSelectionList, MatListOption]
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] | undefined;
  categoriesSubscription: Subscription | undefined;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((response: Array<string>) => {
        this.categories = response;
      });
  }

  onShowCategory(category: string): void {
    this.showCategory.next(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
