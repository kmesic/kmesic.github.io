var React = require('react'),
	Nav = require('react-bootstrap/lib/Nav'),
	Navbar = require('react-bootstrap/lib/Navbar'),
    NavItem = require('react-bootstrap/lib/NavItem'),
    IndexLinkContainer = require('react-router-bootstrap/lib/IndexLinkContainer'),
    Link = require('react-router/lib/Link');

module.exports = React.createClass({

	displayName: 'NavigationBar',

    getInitialState: function() {
        return {
            active: 1
        };
    },

    handleSelect: function(eventKey, event) {
        this.setState({
            active: eventKey
        });
    },

	render: function() {
		return (
			<Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/home">Kenan Mesic</Link>
					</Navbar.Brand>
                    <Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
                    <Nav activeKey={this.state.active} onSelect={this.handleSelect}>
                        <IndexLinkContainer to="/about">
                            <NavItem eventKey={1}>About</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/projects">
                            <NavItem eventKey={2}>Projects</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/skills">   
                            <NavItem eventKey={3}>Skills</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/work">
                            <NavItem eventKey={4}>Work</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/contact">
                            <NavItem eventKey={5} href="/#/contact">Contact</NavItem>
                        </IndexLinkContainer>
                    </Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
});