/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min',
    'd3'
], function (news, React, d3) {

    var source = React.createClass({
        render: function () {
            return (
                <div className="caption"><p>*City of London has no data, the Isles of Scilly has one school</p></div>
            );
        }
    });

    return source;
});
