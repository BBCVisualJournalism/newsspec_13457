define([
    'bootstrap',
    'underscore',
    'lib/vendors/backbone/backbone-1.1.2.min',
    'lib/vendors/react/react-0.13.2.min',
    'app/views/compiled/wrapper'
], function (news, _, Backbone, React, Wrapper) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'view/:area': 'single',
            '*actions': 'index'
        }
    });

    var init = function () {
        var appRoutes = new AppRouter();

        appRoutes.on('route:index', function() {
            React.render(React.createElement(Wrapper, null), document.getElementsByClassName('main')[0]);
        });

        appRoutes.on('route:single', function(area) {
            //console.log(area);
        });

        Backbone.history.start();
    };

    return {
        init: init
    };

});
