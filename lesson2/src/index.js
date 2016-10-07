var React = require('react');
var ReactDOM = require('react-dom');

var ComponentExample = React.createClass({
    render: function() {
        return (
            <div className="commentBox">Hello, world! I am a CommentBox.</div>
        );
    }
});

ReactDOM.render(React.createElement(ComponentExample), document.getElementById('app')); 
