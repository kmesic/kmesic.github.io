var React = require('react'),
    DropdownMenu = require('react-bootstrap/lib/DropdownMenu'),
    InputGroup = require('react-bootstrap/lib/InputGroup'),
    MenuItem = require('react-bootstrap/lib/MenuItem'),
    FormControl = require('react-bootstrap/lib/FormControl');

//FIXME: need to fix when no suggestions are there

module.exports = React.createClass({

    displayName: 'DropdownInput',

    propTypes: {
        suggestions: React.PropTypes.array
    },

    getInitialState: function() {
        return {
            menuDown: false,
            currentItem: -1,
            value: ''
        };
    },

    handleChange: function(e) {
        if (!this.state.menuDown) {
            this.setState({
                menuDown: true,
                currentItem: 0,
                value: e.target.value
            });
            return;
        }
        this.setState({
            value: e.target.value,
            currentItem: -1,
        });
    },

    onKeyDown: function(e) {
        switch (e.keyCode) {
            case 38: //up arrow
                if (this.state.menuDown) {
                    if (this.realIndex > 0 && this.filteredSuggestions.length > 0) {
                        this.setState({
                            currentItem: this.filteredSuggestions[this.realIndex - 1].index
                        });
                    }
                }
                break;
            case 40: //down arrow
                if (this.state.menuDown) {
                    if (this.realIndex < this.counter - 1 && this.filteredSuggestions.length > 0) {
                        this.setState({
                            currentItem: this.filteredSuggestions[this.realIndex + 1].index
                        });
                    }
                } else {
                    this.setState({
                        menuDown: true
                    });
                }
                break;
            case 13: //enter
                if (this.state.currentItem > -1) {
                    this.handleSelect(this.state.currentItem);
                }
                break;

        }
    },

    handleSelect: function(index) {
        
        this.setState({
            value: this.props.suggestions[index],
            menuDown: false,
        });
    },

    handleClick: function() {
        this.setState({
            menuDown: !this.state.menuDown
        });
    },

    setValue: function(value) {
        this.setState({
            value: value
        });
    },

    onMouseEnter: function(index) {
        this.setState({
            currentItem: index
        });
    },

    handleFocusOut: function() {
        this.setState({
            menuDown: false
        });
    },

    checkSubstring: function(item) {
        var index = item.indexOf(this.state.value);
        if (this.state.value === null || this.state.value === '') {
            return true;
        }
        if (index !== -1) {
            var lastIndex = item.length + index;
            var itemSubString = item.substring(0, lastIndex);
            var valueSubString = this.state.value.substring(0, lastIndex);
            if (itemSubString === valueSubString) {
                return true;
            } else if (lastIndex > this.state.value.length - 1) {
                if (valueSubString === item.substring(0, this.state.value.length)) {
                    return true;
                }
            }
        }
        return false;
    },

    render: function() {
        this.counter = 0;
        this.realIndex = -1;
        this.filteredSuggestions = [];
        return (
            <div>
                <InputGroup>
                    <FormControl type="text"
                                 onChange={this.handleChange}
                                 onKeyDown={this.onKeyDown}
                                 onClick={this.handleClick}
                                 onBlur={this.handleFocusOut}
                                 value={this.state.value}/>
                </InputGroup>
                {this.state.menuDown && this.props.suggestions.length > 0 ?
                        <div id='test' className='dropdown open'> 
                            <DropdownMenu>
                               {this.props.suggestions.map(function(element, index) {
                                    var className = '';
                                    if (!this.checkSubstring(element)) {
                                        return null;
                                    }
                                    this.counter++;
                                    if (this.state.currentItem === index) {
                                        this.realIndex = this.counter - 1;
                                        className = 'active';
                                    }
                                    this.filteredSuggestions.push({index: index, data: element});
                                    return (
                                        <MenuItem
                                            key={index}
                                            className={className}
                                            onMouseEnter={this.onMouseEnter.bind(this, index)}
                                            onMouseDown={this.handleSelect.bind(this, index)}
                                            onSelect={this.handleSelect.bind(this, index)}>
                                            {element}
                                        </MenuItem> 
                                    );
                               }.bind(this))}
                            </DropdownMenu>
                        </div> 
                    : null
                }
            </div>

        );
    }
});