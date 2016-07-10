var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router/lib/Router'),
    Route = require('react-router/lib/Route'),
    IndexRedirect = require('react-router/lib/IndexRedirect'),
    Home = require('Home'),
    About = require('About'),
    Projects = require('Projects'),
    Skills = require('Skills'),
    Work = require('Work'),
    Contact = require('Contact'),
    NavigationBar = require('NavigationBar');

var App = React.createClass({
    
    propTypes: {
        children: React.PropTypes.node
    },

    render: function() {
        return (
        <div>
            <NavigationBar/>
            {this.props.children}
        </div>
        );
    }
});

ReactDOM.render(
    (
        <Router>
            <Route path="/" component={App}>
                <IndexRedirect to="home"/>
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
                <Route path="projects" component={Projects} />
                <Route path="skills" component={Skills} />
                <Route path="work" component={Work} />
                <Route path="contact" component={Contact} />
            </Route>
        </Router>
    ), 
    document.getElementById("app")
);