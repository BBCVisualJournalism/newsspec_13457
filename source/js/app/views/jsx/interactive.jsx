/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
    ], function (news, React) {

        var interactive = React.createClass({
            render: function () {
                return (
                    <div className="interactive-indicator">INTERACTIVE</div>
                );
            }
        });

        return interactive;
    });
