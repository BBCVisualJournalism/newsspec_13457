/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min',
    'd3'
], function (news, React, d3) {

    var source = React.createClass({
        render: function () {
            return (
                <div className="figures">
                    <div className="column">
                        <h4>Lowest scores</h4>
                        <ol>
                            <li>Knowsley <strong>35.4%</strong></li>
                            <li>Bradford <strong>44%</strong></li>
                            <li>Blackpool <strong>44%</strong></li>
                            <li>Nottingham <strong>44.6%</strong></li>
                        </ol>
                    </div>

                    <div className="column last">
                        <h4>Highest scores</h4>
                        <ol>
                            <li>Kensington and Chelsea <strong>73.8%</strong></li>
                            <li>Isles of Scilly <strong>72.7%</strong></li>
                            <li>Trafford <strong>72.2%</strong></li>
                            <li>Sutton <strong>72.1%</strong></li>
                        </ol>
                    </div>
                </div>
            );
        }
    });

    return source;
});
