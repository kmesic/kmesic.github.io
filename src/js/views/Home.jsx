var React = require('react'),
    Jumbotron = require('react-bootstrap/lib/Jumbotron'),
    Avatar = require('react-avatar');

module.exports = React.createClass({
    
    displayName: 'Home',

    render: function() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="container">System.out.println('Welcome!');</h1>
                    <Avatar className="avatar sb-avatar" src="avatar.JPG" size={300} round/>
                    <p className="container">My name is Kenan Mesic.</p>
                    <p className="container">Student at UC San Diego pursing a B.S. Computer Science degree.</p>
                    <p className="container">Full Stack Software Engineer with experience in system level software.</p>

                </Jumbotron>
            </div>
        );
    }    
});
