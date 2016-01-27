/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
], function (news, React) {

    var path = React.createClass({
        render: function () {
            return (
                <li>
                    <div style={this.props.style}></div>{this.props.label}
                </li>
            );
        }
    });

    return path;
});
