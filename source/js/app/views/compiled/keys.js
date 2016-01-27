/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min',
    'app/utils',
    'app/collections/keys',
    'app/views/compiled/bullet'
    ], function (news, React, Utils, Keys, Bullet) {

        var keys = React.createClass({displayName: "keys",
            getDefaultProps: function() {
                return {
                    keys: Keys
                }
            },
            render: function () {
                return (
                    React.createElement("div", null, 
                        React.createElement("p", null, React.createElement("strong", null, "National average 57.1%")), 
                        React.createElement("ul", null, 
                            this.props.keys.map(function(key, index) {
                                var cssStyle = {
                                        background: 'rgb(' + key.attributes.RGB + ')'
                                    },
                                    label = key.attributes.LABEL;

                                if(label.length > 0) return React.createElement(Bullet, {key: key.id, style: cssStyle, label: label});
                            })
                        )
                    )
                );
            }
        });

        return keys;
    });
