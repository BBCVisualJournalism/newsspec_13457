/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
    ], function (news, React) {

        var heading = React.createClass({
            render: function () {
                return (
                    <h3>School performance in England's local authorities</h3>
                );
            }
        });

        return heading;
    });
