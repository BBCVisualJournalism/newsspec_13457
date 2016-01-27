/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
], function (news, React) {

    var path = React.createClass({displayName: "path",
        render: function () {
            return (
                React.createElement("li", null, 
                    React.createElement("div", {style: this.props.style}), this.props.label
                )
            );
        }
    });

    return path;
});
