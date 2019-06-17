import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KahluaLibService = /** @class */ (function () {
    function KahluaLibService() {
    }
    KahluaLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    KahluaLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ KahluaLibService.ngInjectableDef = defineInjectable({ factory: function KahluaLibService_Factory() { return new KahluaLibService(); }, token: KahluaLibService, providedIn: "root" });
    return KahluaLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KahluaLibComponent = /** @class */ (function () {
    function KahluaLibComponent() {
    }
    /**
     * @return {?}
     */
    KahluaLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    KahluaLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kh-kahlua-lib',
                    template: "\n    <p>\n      kahlua-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    KahluaLibComponent.ctorParameters = function () { return []; };
    return KahluaLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.items = [];
    }
    /**
     * @return {?}
     */
    ListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kh-list',
                    template: "<ul class=\"list-group\">\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let item of items\">\n    {{ item.content }}\n    <span class=\"badge badge-primary badge-pill\" *ngIf=\"item.hasBadge\">{{item.badgeValue}}</span>\n  </li>\n</ul>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return []; };
    ListComponent.propDecorators = {
        items: [{ type: Input }]
    };
    return ListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kh-card',
                    template: "<div class=\"card mb-3\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    return CardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardHeaderComponent = /** @class */ (function () {
    function CardHeaderComponent() {
    }
    /**
     * @return {?}
     */
    CardHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kh-card-header',
                    template: "<div class=\"card-header\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardHeaderComponent.ctorParameters = function () { return []; };
    return CardHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardBodyComponent = /** @class */ (function () {
    function CardBodyComponent() {
    }
    /**
     * @return {?}
     */
    CardBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kh-card-body',
                    template: "<div class=\"card-body\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardBodyComponent.ctorParameters = function () { return []; };
    return CardBodyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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