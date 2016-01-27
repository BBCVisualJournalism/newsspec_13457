/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min',
    'app/views/compiled/map',
    'app/views/compiled/keys',
    'app/views/compiled/interactive',
    'app/views/compiled/tooltip',
    'app/views/compiled/source',
    'app/views/compiled/figures',
    'app/views/compiled/caption',
    'app/views/compiled/heading',
    'app/views/compiled/subheader'
], function (news, React, Map, Keys, Interactive, Tooltip, Source, Figures, Caption, Heading, Subheader) {

    var wrapper = React.createClass({
        render: function () {
            return (
                <div className='wrapper'>
                    <Heading />
                    <Subheader />
                    <Keys />
                    <Interactive />
                    <Map />
                    <Source />
                    <Caption />
                    <Tooltip />
                </div>
            );
        }
    });

    return wrapper;
});
