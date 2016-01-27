/** @jsx React.DOM */
define([
    'bootstrap',
    'd3',
    'lib/vendors/react/react-0.13.2.min',
    'app/settings',
    'app/views/compiled/land'
], function (news, d3, React, Settings, Land) {

    var map = React.createClass({
        getInitialState: function() {
            var windowWidth = window.innerWidth,
                svgWidth = Settings.get('svg').width,
                svgHeight = Settings.get('svg').height,
                aspectRatio = svgWidth / svgHeight,
                responsiveProportion = windowWidth * 100 / svgWidth,
                heightProportion = svgHeight * (responsiveProportion / 100),
                maxWidth = 976,
                maxResponsiveProportion = (maxWidth * 100) / svgWidth;

                responsiveProportion = (responsiveProportion > maxResponsiveProportion) ? maxResponsiveProportion : responsiveProportion;

            return {
                windowWidth: windowWidth,
                /*width: svgWidth,
                height: svgHeight,*/
                width: windowWidth,
                height: heightProportion,
                responsiveProportion: responsiveProportion,
                resetView: false
            };
        },

        handleResize: function(e) {
            var windowWidth = window.innerWidth,
                svgWidth = Settings.get('svg').width,
                svgHeight = Settings.get('svg').height,
                aspectRatio = svgWidth / svgHeight,
                responsiveProportion = windowWidth * 100 / svgWidth,
                heightProportion = svgHeight * (responsiveProportion / 100),
                maxWidth = 976,
                maxResponsiveProportion = (maxWidth * 100) / svgWidth;

                responsiveProportion = (responsiveProportion > maxResponsiveProportion) ? maxResponsiveProportion : responsiveProportion;

            this.setState({
                width: windowWidth,
                height: heightProportion,
                responsiveProportion: responsiveProportion,
                resetView: 'translate(0,0)scale(1)'
            }, function() {
                d3.select('g')
                    .attr('transform', 'translate(0,0)scale(1)');
            });
        },

        componentDidMount: function() {
            window.addEventListener('resize', this.handleResize);
        },

        componentWillUnmount: function() {
            window.removeEventListener('resize', this.handleResize);
        },

        render: function () {
            var that = this,
                lands = Settings.get('maps');

            return (
                <svg width={this.state.width} height={this.state.height}>
                    {
                        lands.map(function(obj, i) {
                            return <Land name={obj} key={i} responsiveProportion={that.state.responsiveProportion} transform={that.state.resetView} />
                        })
                    }
                    <div>{this.state.scaleProportion}</div>
                </svg>
            );
        }
    });

    return map;
});
