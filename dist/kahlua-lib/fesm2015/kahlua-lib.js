import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KahluaLibService {
    constructor() { }
}
KahluaLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
KahluaLibService.ctorParameters = () => [];
/** @nocollapse */ KahluaLibService.ngInjectableDef = defineInjectable({ factory: function KahluaLibService_Factory() { return new KahluaLibService(); }, token: KahluaLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KahluaLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
KahluaLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'kh-kahlua-lib',
                template: `
    <p>
      kahlua-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
KahluaLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'kh-card',
                template: "<div class=\"card mb-3\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'kh-card-header',
                template: "<div class=\"card-header\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CardHeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardBodyComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'kh-card-body',
                template: "<div class=\"card-body\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CardBodyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KahluaLibModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { KahluaLibService, KahluaLibComponent, KahluaLibModule, CardBodyComponent as ɵd, CardHeaderComponent as ɵc, CardComponent as ɵb, ListComponent as ɵa };

//# sourceMappingURL=kahlua-lib.js.map