define([
    'lib/vendors/backbone/backbone-1.1.2.min'
], function (Backbone) {

    var settings = new Backbone.Model({
        'maps' : ['london', 'england'],
        'svg' : {
            'width' : 616,
            'height' : 620
        },
        'infopanel' : false,
        'zoom' : {
            'enabled' : false,
            'level' : 8
        },
        'keysType' : 'numbers' // or "tags" (like lab/con/libdem)
    });

    return settings;
});
