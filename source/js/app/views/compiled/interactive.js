/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
    ], function (news, React) {

        var interactive = React.createClass({displayName: "interactive",
            render: function () {
                return (
                    React.createElement("div", {className: "interactive-indicator"}, "INTERACTIVE")
                );
            }
        });

        return interactive;
    });
