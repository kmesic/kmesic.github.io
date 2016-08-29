var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router/lib/Router'),
    HashHistory = require('react-router/lib/hashHistory'),
    Route = require('react-router/lib/Route'),
    IndexRedirect = require('react-router/lib/IndexRedirect'),
    Home = require('Home'),
    About = require('About'),
    Projects = require('Projects'),
    Skills = require('Skills'),
    Work = require('Work'),
    Contact = require('Contact'),
    NavigationBar = require('NavigationBar');

require('../scss/bootstrap/css/bootstrap.min.css');
require('../scss/bootstrap/css/bootstrap-theme.min.css');
require('../scss/index.scss');


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
        <Router history={HashHistory}>
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