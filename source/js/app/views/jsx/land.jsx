/** @jsx React.DOM */
define([
    'bootstrap',
    'underscore',
    'lib/vendors/react/react-0.13.2.min',
    'd3',
    'lib/vendors/d3/topojson-1.6.18.min',
    //'d3.hexbin',
    'app/settings',
    'app/collections/maps',
    'app/collections/fixed-data',
    'app/controllers/colours',
    'app/views/compiled/path',
    'app/views/compiled/circle',
    'app/views/compiled/hexagon'
], function (news, _, React, d3, Topojson, /*Hexbin,*/ Settings, Maps, DataCollection, Colours, Path, Circle, Hexagon) {

    var land = React.createClass({
        getDefaultProps: function() {
            return {
                name: null
            }
        },

        getInitialState: function() {
            var name = this.props.name,
                landMaps = Maps.where({ name: name }),
                landData = DataCollection.where({ name: name }),
                landMapsProps = landMaps[0].attributes.properties,
                landMapsLabel = landMaps[0].attributes.label,
                labelMarginLeft = 28,
                labelMarginTop = 250,
                landDataProps = landData[0].attributes.data,
                isZoomedIn = false,
                areaZoomedIn = null;

            return {
                topojsonFeatures: landMapsProps.topojsonFeatures,
                center: landMapsProps.center,
                parallels: landMapsProps.parallels,
                rotate: landMapsProps.rotate,
                translate: landMapsProps.translate,
                scale: landMapsProps.scale,
                data: landDataProps,
                isZoomedIn: isZoomedIn,
                areaZoomedIn: areaZoomedIn,
                label: landMapsLabel,
                labelMarginLeft: labelMarginLeft,
                labelMarginTop: labelMarginTop
            }
        },

        handleClick: function(component) {
            var area = component.props.code;

            if (Settings.get('zoom').enabled) {
                if (!this.state.isZoomedIn) {
                    this.setState({areaZoomedIn: area});
                    this.zoomIn(component);
                    //Backbone.history.navigate('view/' + area);
                    window.location.hash = 'view/' + area;
                } else {
                    if (area !== this.state.areaZoomedIn) {
                        this.setState({areaZoomedIn: area});
                        this.zoomIn(component);
                        //Backbone.history.navigate('view/' + area);
                        window.location.hash = 'view/' + area;
                    } else {
                        this.zoomOut(component);
                    }
                }
            }
        },

        handleMouseOver: function(component) {
            var area = component.props.code,
                map = component.props.map,
                model = DataCollection.where({ name: map }),
                data = model[0].attributes.data,
                item = _.filter(data, function(a) {
                    return a.CODE === area;
                });
            // event = new CustomEvent('tooltip:display', { 'detail': item[0] });
            var displayTooltipEvent,
                eventName = 'tooltip:display',
                obj = window;
            if(document.createEvent) {
                displayTooltipEvent = document.createEvent('CustomEvent');
                displayTooltipEvent.initCustomEvent(eventName, true, true, item[0]);
                // args: string type, boolean bubbles, boolean cancelable, any object
            }
            displayTooltipEvent.eventName = eventName;
            // window.dispatchEvent(displayTooltipEvent);
            if(obj.dispatchEvent) {
                obj.dispatchEvent(displayTooltipEvent);
            } else if (obj[eventName]) {
                obj[eventName]();
            } else if (obj['on'+eventName]) {
                obj['on'+eventName]();
            }
        },

        handleMouseOut: function(component, obj) {
            // var event = new CustomEvent('tooltip:hide', {});
            var hideTooltipEvent,
                eventName = 'tooltip:hide',
                obj = window;
            if(document.createEvent) {
                hideTooltipEvent = document.createEvent('HTMLEvents');
                hideTooltipEvent.initEvent(eventName, true, true);
                // args: string type, boolean bubbles, boolean cancelable
            }
            hideTooltipEvent.eventName = eventName;

            // window.dispatchEvent(event);
            if(obj.dispatchEvent) {
                obj.dispatchEvent(hideTooltipEvent);
            } else if (obj[eventName]) {
                obj[eventName]();
            } else if (obj['on'+eventName]) {
                obj['on'+eventName]();
            }
        },

        zoomIn: function(component) {
            var xCompensation = 40 * (this.props.responsiveProportion / 100),
                yCompensation = 34 * (this.props.responsiveProportion / 100),
                x = component.props.centroid[0] - xCompensation,
                y = component.props.centroid[1] - yCompensation,
                zoomLevel = 8;

            d3.selectAll('g:not(.' + this.props.name + ')').style('display', 'none');

            d3.select('g.' + this.props.name)
                .transition()
                .duration(620)
                .attr('transform', 'scale(' + zoomLevel + ')translate(' + -x + ',' + -y + ')')
                .each('end', this.zoomCallback('zoomedIn'));
        },

        zoomOut: function() {
            var x = 0,
                y = 0,
                zoomLevel = 1;

            d3.select('g.' + this.props.name)
                .transition()
                .duration(620)
                .attr('transform', 'scale(' + zoomLevel + ')translate(' + -x + ',' + -y + ')')
                .each('end', this.zoomCallback('zoomedOut'));
        },

        zoomCallback: function(action) {
            var that = this;

            if (action === 'zoomedIn') {
                that.setState({isZoomedIn: true});
            } else {
                setTimeout(function () {
                    d3.selectAll('g').style('display', 'block');
                    that.setState({isZoomedIn: false});
                }, 580);
            }
        },

        render: function () {
            var that = this,
                name = this.props.name,
                label = this.props.label,
                labelx = this.state.labelMarginLeft * (this.props.responsiveProportion / 100),
                labely = this.state.labelMarginTop * (this.props.responsiveProportion / 100),
                scaleProportion = this.state.scale * (this.props.responsiveProportion / 100),
                translateProportionX = this.state.translate[0] * (this.props.responsiveProportion / 100),
                translateProportionY = this.state.translate[1] * (this.props.responsiveProportion / 100),
                translateProportion = [translateProportionX, translateProportionY],
                getPath = d3.geo.path().projection(
                    d3.geo.conicEqualArea()
                        .scale(scaleProportion)
                        .center(this.state.center)
                        .parallels(this.state.parallels)
                        .rotate(this.state.rotate)
                        .translate(translateProportion)
                    ),
                getDataFromstate = this.state.data,
                classString = this.state.isZoomedIn? 'zoomedIn ' : '';
                classString += this.props.name;

            var gNode = <g className={classString} transform={this.state.transform}>
                            {
                                this.state.topojsonFeatures.map(function(topojsonFeature, i) {

                                    //if (getDataFromstate[topojsonFeature.properties.PCON12CD]) {

                                        var code = topojsonFeature.properties.CODE,
                                            dataFromState = getDataFromstate[code],
                                            percentage = parseFloat(dataFromState.PERCENTAGE),
                                            colour = Colours.getColour(percentage),
                                            cssStyle = {
                                                fill: 'rgb(' + colour + ')'
                                            }
                                            centroid = getPath.centroid(topojsonFeature);

                                        return <Path key={i} map={name} code={code} d={getPath(topojsonFeature)} centroid={centroid} style={cssStyle} onClick={that.handleClick} onMouseOver={that.handleMouseOver} onMouseOut={that.handleMouseOut} />;
                                    //}
                                })
                            }
                            <text x={labelx} y={labely} className="ns__map-label">{that.state.label}</text>
                        </g>;

            return (gNode);

        }
    });

    return land;
});