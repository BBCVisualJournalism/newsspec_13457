/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
], function (news, React) {

    var path = React.createClass({displayName: "path",
        getDefaultProps: function() {
            return {
                code: null
            }
        },

        render: function () {
            return (
                //path.attr("d", function(d) { return "M" + d.x + "," + d.y + hexbin.hexagon(); });
                React.createElement("path", {d: this.props.d, onClick: this.props.onClick.bind(null, this), onMouseOver: this.props.onMouseOver.bind(null, this), onMouseOut: this.props.onMouseOut.bind(null, this)})
            );
        }
    });

    return path;
});
