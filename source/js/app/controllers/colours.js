define([
    'bootstrap',
    'underscore',
    'app/collections/keys',
    ], function (news, _, Keys) {

        var getColour = function (value, mapName) {

            var result = _.find(Keys.models, function(model) {
                    if (model.attributes.MAPNAME === mapName && value >= model.attributes.VALUE) {
                        return model;
                    }
                });

            return result.attributes.RGB;
        };

        return {
            getColour: getColour
        };

    });
