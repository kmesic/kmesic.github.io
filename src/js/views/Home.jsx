var React = require('react'),
    Jumbotron = require('react-bootstrap/lib/Jumbotron'),
    DropdownInput = require('DropdownInput'),
    Avatar = require('react-avatar');

module.exports = React.createClass({
    
    displayName: 'Home',

    render: function() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="container">System.out.println('Hello!');</h1>
                    <Avatar className="avatar sb-avatar" src="avatar.jpg" size={300} round/>
                    <p className="container">Welcome! My name is Kenan Mesic.</p>
                    <p className="container">I am a Software Engineer with experience in full stack development along with system level software.</p>
                </Jumbotron>
                <DropdownInput suggestions={['test', 'hi']}/>
            </div>
        );
    }    
});
