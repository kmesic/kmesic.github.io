var React = require('react'),
    Jumbotron = require('react-bootstrap/lib/Jumbotron'),
    DropdownInput = require('DropdownInput');

module.exports = React.createClass({
    
    displayName: 'Home',

    render: function() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="container">System.out.println('Hello!');</h1>
                    <p className="container">Welcome! My name is Kenan Mesic.</p>
                    <p className="container">I am a Software Engineer with experience in full stack development along with system level software.</p>
                </Jumbotron>
                <DropdownInput suggestions={['test', 'hi']}/>
            </div>
        );
    }    
});
