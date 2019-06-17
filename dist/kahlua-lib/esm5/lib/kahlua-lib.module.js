/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { KahluaLibComponent } from './kahlua-lib.component';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';
var KahluaLibModule = /** @class */ (function () {
    function KahluaLibModule() {
    }
    KahluaLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [KahluaLibComponent, ListComponent, CardComponent, CardHeaderComponent, CardBodyComponent],
                    imports: [
                        CommonModule,
                        BrowserModule,
                    ],
                    exports: [
                        KahluaLibComponent,
                        ListComponent,
                        CardComponent, CardHeaderComponent, CardBodyComponent
                    ]
                },] }
    ];
    return KahluaLibModule;
}());
export { KahluaLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FobHVhLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWhsdWEtbGliLyIsInNvdXJjZXMiOlsibGliL2thaGx1YS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVwRjtJQUFBO0lBWStCLENBQUM7O2dCQVovQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDeEcsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUI7cUJBQ3REO2lCQUNGOztJQUM4QixzQkFBQztDQUFBLEFBWmhDLElBWWdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS2FobHVhTGliQ29tcG9uZW50IH0gZnJvbSAnLi9rYWhsdWEtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC1oZWFkZXIvY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC1ib2R5L2NhcmQtYm9keS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtLYWhsdWFMaWJDb21wb25lbnQsIExpc3RDb21wb25lbnQsIENhcmRDb21wb25lbnQsIENhcmRIZWFkZXJDb21wb25lbnQsIENhcmRCb2R5Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgS2FobHVhTGliQ29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnQsXG4gICAgQ2FyZENvbXBvbmVudCwgQ2FyZEhlYWRlckNvbXBvbmVudCwgQ2FyZEJvZHlDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBLYWhsdWFMaWJNb2R1bGUgeyB9XG4iXX0=