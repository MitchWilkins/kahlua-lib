(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/platform-browser'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('kahlua-lib', ['exports', '@angular/common', '@angular/platform-browser', '@angular/core'], factory) :
    (factory((global['kahlua-lib'] = {}),global.ng.common,global.ng.platformBrowser,global.ng.core));
}(this, (function (exports,common,platformBrowser,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KahluaLibService = /** @class */ (function () {
        function KahluaLibService() {
        }
        KahluaLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        KahluaLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ KahluaLibService.ngInjectableDef = i0.defineInjectable({ factory: function KahluaLibService_Factory() { return new KahluaLibService(); }, token: KahluaLibService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
                        selector: 'kh-list',
                        template: "<ul class=\"list-group\">\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let item of items\">\n    {{ item.content }}\n    <span class=\"badge badge-primary badge-pill\" *ngIf=\"item.hasBadge\">{{item.badgeValue}}</span>\n  </li>\n</ul>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ListComponent.ctorParameters = function () { return []; };
        ListComponent.propDecorators = {
            items: [{ type: i0.Input }]
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
                        declarations: [KahluaLibComponent, ListComponent, CardComponent, CardHeaderComponent, CardBodyComponent],
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule,
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

    exports.KahluaLibService = KahluaLibService;
    exports.KahluaLibComponent = KahluaLibComponent;
    exports.KahluaLibModule = KahluaLibModule;
    exports.ɵd = CardBodyComponent;
    exports.ɵc = CardHeaderComponent;
    exports.ɵb = CardComponent;
    exports.ɵa = ListComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=kahlua-lib.umd.js.map