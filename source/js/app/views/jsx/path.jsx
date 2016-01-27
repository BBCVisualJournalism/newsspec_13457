/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
], function (news, React) {

    var path = React.createClass({
        getDefaultProps: function() {
            return {
                code: null
            }
        },

        render: function () {
            return (
                <path d={this.props.d} centroid={this.props.centroid} style={this.props.style} onClick={this.props.onClick.bind(null, this)} onMouseOver={this.props.onMouseOver.bind(null, this)} onMouseOut={this.props.onMouseOut.bind(null, this)} />
            );
        }
    });

    return path;
});
