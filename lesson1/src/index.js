var React = require('react');
var ReactDOM = require('react-dom');

var ComponentExample = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: "commentBox"},
                "Hello, world! I am a CommentBox."
            )
        );
    }
});

//ReactDOM.render(<ComponentExample />, document.getElementById('app'));

ReactDOM.render(React.createElement(ComponentExample), document.getElementById('app')); 
