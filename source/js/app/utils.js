define([
    'bootstrap',
    'underscore'
], function (news, _) {

    var csvToJson = function (csv) {
		var lines = csv.split('\n'),
			result = [],
			headers = lines[0].split(',');

		for (var i=1;i<lines.length;i++) {
			var obj = {},
				line = lines[i].split(',');

                if (line.length > 1) {
                    for (var j=0;j<headers.length;j++) {
                        obj[headers[j]] = line[j];
                    }
                    result.push(obj);
                }
		}
		return result;
    };

    var rgbFromPipedValues = function (rgb) {
        return rgb.replace(/\|/g, ',');
    };

    return {
        csvToJson: csvToJson,
        rgbFromPipedValues: rgbFromPipedValues
    };

});
