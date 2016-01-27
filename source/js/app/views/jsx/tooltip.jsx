/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min',
    'd3'
], function (news, React, d3) {

    var tooltip = React.createClass({
        getInitialState: function() {
            return {
                name: null,
                percentage: null,
                display: 'none',
                x: null,
                y: null
            }
        },
        handleDisplay: function(e) {
            var name = e.detail.NAME,
                percentage = parseFloat(e.detail.PERCENTAGE);

            /*var tooltipWidthOffset = parseInt(news.$('.tooltip').outerWidth(), 10) / 2;
            var left = d3.event.pageX - news.$('svg').offset().left - tooltipWidthOffset;
            if (left < 0) {left = 0; }
                var top = d3.event.pageY - news.$('svg').offset().top + tooltipTopOffset;
                d3.select('.tooltip').style({'left' : left + 'px', 'top' : top + 'px', 'display' : 'block'});*/
            this.setState({name: name, percentage: percentage, display: 'block'});
        },
        handleHide: function(e) {
            this.setState({name: null, percentage: null, display: 'none'});
        },
        handleMouseMove: function(e) {
            var x = e.pageX,
                y = e.pageY,
                tooltipWidth = news.$('.tooltip').outerWidth(),
                tooltipWidthOffset = parseInt(tooltipWidth, 10) / 2,
                left = x - news.$('svg').offset().left - tooltipWidthOffset,
                top = y - news.$('svg').offset().top + 116,
                svgWidth = news.$('svg').parent().outerWidth(),
                rightLimit = svgWidth - tooltipWidth;

            if (left < 0) {left = 0; }
            if (left > rightLimit) {left = rightLimit; }

            this.setState({x: left, y: top});
        },
        componentWillMount: function() {
            window.addEventListener("tooltip:display", this.handleDisplay, false);
            window.addEventListener("tooltip:hide", this.handleHide, false);
            window.addEventListener("mousemove", this.handleMouseMove, false);
        },
        componentWillUnmount: function() {
            window.removeEventListener("tooltip:display", this.handleDisplay, false);
            window.removeEventListener("tooltip:hide", this.handleHide, false);
            window.removeEventListener("mousemove", this.handleMouseMove, false);
        },
        render: function () {
            var cssStyle = {
                display: this.state.display,
                left: this.state.x,
                top: this.state.y
            };

            var dataValue = this.state.percentage === -1 ? 'No data' : this.state.percentage + '%';

            return (
                <div style={cssStyle} className="tooltip"><strong>{this.state.name}</strong> <span>({dataValue})</span></div>
            );
        }
    });

    return tooltip;
});
