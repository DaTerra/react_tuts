/*
var jqxhr = $.getJSON("data/forms.json", function(jqXHR, textStatus, errorThrown) {
        console.log("success");
    })
    .done(function(data) {
        console.log("data", data);
        self.setState({
                response: data
            })
            // self.setState({response:theData});
    })
    .error(function(jqXHR, textStatus, errorThrown) {
        console.log("error " + textStatus);
        console.log("incoming Text " + jqXHR.responseText);

    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("getJSON is over");
    });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.complete(function(data) {
    console.log("this.state", self.state);
    console.log("data", data);

    self.setState({ items: data, text: 'nextText' });
    // self.setState(self.state);
    console.log("forces");
    // this.forceUpdate();
});

console.log("jqxhr", jqxhr);
// this.setState({items:jqxhr});

return { items: jqxhr };

},
*/

var FormApp = React.createClass({
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
ReactDOM.render( < FormApp / > , document.getElementById('content2'));
