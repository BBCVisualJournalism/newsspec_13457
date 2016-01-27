/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
], function (news, React) {

    var circle = React.createClass({displayName: "circle",
        getDefaultProps: function() {
            return {
                cx: null,
                cy: null,
                r: null,
                fill: null
            }
        },

        render: function () {
            return (
                React.createElement("circle", {cx: this.props.cx, cy: this.props.cy, r: this.props.r, fill: this.props.fill})
            );
        }
    });

    return circle;
});
