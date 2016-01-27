define([
    'lib/vendors/backbone/backbone-1.1.2.min',
    'd3',
    'lib/vendors/d3/topojson-1.6.18.min',
    'maps/england.topojson',
    'maps/london.topojson'
], function (Backbone, d3, Topojson, England, London) {

    var Map = Backbone.Model.extend({
            name: null,
            properties: null
        }),
        maps = new Backbone.Collection;

    var london = new Map({
        name: 'london',
        label: 'London in detail',
        properties: {
            'topojsonFeatures' : Topojson.feature(London, London.objects.boundaries).features,
            'projection' : d3.geo.mercator(),
            'scale': 20595,
            'center': [-1.5831937696417775, 52.13286763520114],
            'parallels': [49.887161769856654, 55.811699768042466],
            'rotate': [1.7831937696417774],
            'translate': [-605, 105]
        }
    });

    var england = new Map({
        name: 'england',
        label: '',
        properties: {
            'topojsonFeatures' : Topojson.feature(England, England.objects.boundaries).features,
            'projection' : d3.geo.mercator(),
            'scale': 6e3,
            'center': [-3.155780527429952, 54.31705211263513],
            'parallels': [49.8865552756808, 59.393848915007354],
            'rotate': [2.555780527429952],
            'translate': [140, 150]
        }
    });
    maps.add(london);
    maps.add(england);

    return maps;
});
