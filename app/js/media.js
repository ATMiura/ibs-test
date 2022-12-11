export default class Media {
    constructor() {
        this.handler();
        this.events();
    }

    handler() {
        if ($(window).width() <= 991) {
            $('[data-media-query="header-main-container"]').find($('[data-move="header-basket"]')).appendTo('[data-media-query="header-top-right"]');
        }
        else {
          $('[data-media-query="header-top-right"]').find($('[data-move="header-basket"]')).appendTo('[data-media-query="header-main-container"]');
        }

        if ($(window).width() <= 575) {
            $('[data-media-query="header-top-container"]').find($('[data-move="header-top-row"]')).appendTo('[data-media-query="mobile-menu"]');
        }
        else {
          $('[data-media-query="mobile-menu"]').find($('[data-move="header-top-row"]')).appendTo('[data-media-query="header-top-container"]');
        }
    }

    events() {
        const self = this;

        $(window).on('resize', function () {
            self.handler();
        });
    }
}
