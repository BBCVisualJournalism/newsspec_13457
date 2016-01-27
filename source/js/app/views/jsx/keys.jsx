/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min',
    'app/utils',
    'app/collections/keys',
    'app/views/compiled/bullet'
    ], function (news, React, Utils, Keys, Bullet) {

        var keys = React.createClass({
            getDefaultProps: function() {
                return {
                    keys: Keys
                }
            },
            render: function () {
                return (
                    <div>
                        <p><strong>National average 57.1%</strong></p>
                        <ul>
                            {this.props.keys.map(function(key, index) {
                                var cssStyle = {
                                        background: 'rgb(' + key.attributes.RGB + ')'
                                    },
                                    label = key.attributes.LABEL;

                                if(label.length > 0) return <Bullet key={key.id} style={cssStyle} label={label} />;
                            })}
                        </ul>
                    </div>
                );
            }
        });

        return keys;
    });
