/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min',
    'd3'
], function (news, React, d3) {

    var source = React.createClass({displayName: "source",
        render: function () {
            return (
                React.createElement("div", {className: "source"}, React.createElement("p", null, "Source: Department for Education"))
            );
        }
    });

    return source;
});
