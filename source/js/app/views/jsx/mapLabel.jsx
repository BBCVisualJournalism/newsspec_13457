/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
    ], function (news, React) {

        var mapLabel = React.createClass({
            render: function () {
                return (
                    <h4 className="ns__map-label">London in detail</h4>
                );
            }
        });

        return mapLabel;
    });