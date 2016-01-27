define(['bootstrap', 'app/router'], function (news, Router) {

    news.pubsub.emit('pageLoaded');

    var init = function () {

        if (isSVGSupported()) {
            Router.init();
        } else {

        }
        news.pubsub.emit('istats', ['app-initiated', 'newsspec-nonuser']);
    };

    var isSVGSupported = function () {
        return (!!document.createElementNS) && (!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
    };

    return {
        init: init,
        isSVGSupported: isSVGSupported
    };
});