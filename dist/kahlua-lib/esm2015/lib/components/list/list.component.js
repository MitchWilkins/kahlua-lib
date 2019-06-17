/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ListComponent {
    constructor() {
        this.items = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'kh-list',
                template: "<ul class=\"list-group\">\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let item of items\">\n    {{ item.content }}\n    <span class=\"badge badge-primary badge-pill\" *ngIf=\"item.hasBadge\">{{item.badgeValue}}</span>\n  </li>\n</ul>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ListComponent.ctorParameters = () => [];
ListComponent.propDecorators = {
    items: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWhsdWEtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRekQsTUFBTSxPQUFPLGFBQWE7SUFFeEI7UUFEZ0IsVUFBSyxHQUFvQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQix1U0FBb0M7O2FBRXJDOzs7OztvQkFFRSxLQUFLOzs7O0lBQU4sOEJBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pdGVtLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2toLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==