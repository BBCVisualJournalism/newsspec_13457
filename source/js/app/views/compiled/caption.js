/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min',
    'd3'
], function (news, React, d3) {

    var source = React.createClass({displayName: "source",
        render: function () {
            return (
                React.createElement("div", {className: "caption"}, React.createElement("p", null, "*City of London has no data, the Isles of Scilly has one school"))
            );
        }
    });

    return source;
});
