/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min',
    'd3'
], function (news, React, d3) {

    var source = React.createClass({displayName: "source",
        render: function () {
            return (
                React.createElement("div", {className: "figures"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("h4", null, "Lowest scores"), 
                        React.createElement("ol", null, 
                            React.createElement("li", null, "Knowsley ", React.createElement("strong", null, "35.4%")), 
                            React.createElement("li", null, "Bradford ", React.createElement("strong", null, "44%")), 
                            React.createElement("li", null, "Blackpool ", React.createElement("strong", null, "44%")), 
                            React.createElement("li", null, "Nottingham ", React.createElement("strong", null, "44.6%"))
                        )
                    ), 

                    React.createElement("div", {className: "column last"}, 
                        React.createElement("h4", null, "Highest scores"), 
                        React.createElement("ol", null, 
                            React.createElement("li", null, "Kensington and Chelsea ", React.createElement("strong", null, "73.8%")), 
                            React.createElement("li", null, "Isles of Scilly ", React.createElement("strong", null, "72.7%")), 
                            React.createElement("li", null, "Trafford ", React.createElement("strong", null, "72.2%")), 
                            React.createElement("li", null, "Sutton ", React.createElement("strong", null, "72.1%"))
                        )
                    )
                )
            );
        }
    });

    return source;
});
