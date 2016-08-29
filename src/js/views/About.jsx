var React = require('react');

var aboutText = [
                    "Hi! I am a Full-stack Developer. I am currently in my third year at University of California San Diego (UCSD).",
                    "I have worked in a variety of software, ranging from front-end to back-end work for application level software.", 
                    "I also have worked in system level software from networking to operating systems"
                ];

module.exports = React.createClass({
    
    displayName: 'About',

    render: function() {
        return (
            <div className="about">
                <div className="aboutText">
                    {aboutText.map(function(text) {
                        return <p className="container">{text}</p>;
                    })}
                </div>
            </div>
        );
    }    
});
