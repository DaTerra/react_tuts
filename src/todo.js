var TodoList = React.createClass({
    render: function() {
        var createItem = function(itemText,i) {
            return <li key={i}>{itemText}</li>;
        };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
    


    getInitialState: function() {
        return {items: [], text: ''};
    },

    onChange: function(e) {
        this.setState({text: e.target.value});
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },

    render: function() {
        console.log("rendering....",this.state);
        return (
        <div>
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} value={this.state.text} />
                <button>{'Add #' + (this.state.items.length + 1)}</button>
            </form>
        </div>
        );
    }
});

ReactDOM.render(<TodoApp />, document.getElementById('todoExample'));