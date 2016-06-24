var StateExample = React.createClass({
    getInitialState : function() {

        return {
          name : "foo"
        };
    },
    handleClick : function() {
        this.setState({
          name : "bar"
        });
    },
    render : function() {
        return <div onClick={this.handleClick}>
          hello {this.state.name}
        </div>;
    }
});




// render a form with React
ReactDOM.render( < StateExample / > , document.getElementById('stateExample'));