define([
    'bootstrap',
    'underscore',
    'lib/vendors/backbone/backbone-1.1.2.min',
    'app/utils',
    'text!data/england.csv',
    'text!data/london.csv'
], function (news, _, Backbone, Utils, EnglandData, LondonData) {

    var FixedDataset = Backbone.Model.extend({
        name: null,
        properties: null
    }),
    fixedDatasets = new Backbone.Collection;

    var london = new FixedDataset({
        name: 'london',
        data: _.indexBy(Utils.csvToJson(LondonData), 'CODE')
    });
    var england = new FixedDataset({
        name: 'england',
        data: _.indexBy(Utils.csvToJson(EnglandData), 'CODE')
    });

    fixedDatasets.add(london);
    fixedDatasets.add(england);

    return fixedDatasets;
});
