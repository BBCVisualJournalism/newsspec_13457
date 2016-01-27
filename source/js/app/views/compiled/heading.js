/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
    ], function (news, React) {

        var heading = React.createClass({displayName: "heading",
            render: function () {
                return (
                    React.createElement("h3", null, "School performance in England's local authorities")
                );
            }
        });

        return heading;
    });
