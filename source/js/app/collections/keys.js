define([
    'bootstrap',
    'underscore',
    'lib/vendors/backbone/backbone-1.1.2.min',
    'app/utils',
    'text!data/keys.csv'
], function (news, _, Backbone, Utils, Keys) {

    var Colour = Backbone.Model.extend({
			value: null,
			rgb: null
	    }),
    	Colours = Backbone.Collection.extend({
	    	model: Colour
    	});

	var colours = new Colours(),
		keys = Utils.csvToJson(Keys),
        keysWithRGB = _.map(keys, function(num){
            num.RGB = Utils.rgbFromPipedValues(num.RGB);
            num.VALUE = parseFloat(num.VALUE);
        }),
        orderKey = _.sortBy(keys, function(num){ return -parseFloat(num.VALUE); });

    colours.add(orderKey);

    return colours;
});
