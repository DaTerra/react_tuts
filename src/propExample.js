var PropExample = React.createClass({

    // this.setState({items: updatedList});

  getInitialState: function(){
     return {
       initialItems: [
         {
            "label": "firstName",
            "type": "text",
            "placeholder": "First Name"
         },
         {
            "label": "lastName",
            "type": "text",
            "placeholder": "Last Name"
         },
         {
            "label": "gender",
            "type": "gender",
            "placeholder": "Last Name",
            "options" : [{
                "value":"male",
                "text":"Male"
            },{
                "value":"female",
                "text":"Female"
            }]
         }
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
        
      <List items={this.state.items}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {

            var theType = {item},newDom;
            console.log("theType",theType.item.type);

            switch(theType.item.type) {
                case 'text':
                    console.log("text...");
                    return <div key={item.label}><input type="text" placeholder={item.placeholder}/></div>;
                    break;
                case 'gender':
                    console.log("gender...",item.options);
                    return <div key={item.label}><Picklist options={item}/></div>;
                    break;
                default:
                    //default code block
            }

        })
       }
      </ul>
    )  
  }
});

var Picklist = React.createClass({

    render: function(){
        console.log("this",this.props);
        return (
            <select>
            {
            this.props.options.options.map(function(item) {

                console.log("item",item);
                return <option value={item.value} key={item.value}>{item.name}</option>;

            })
        }
        </select>
        )
    }
});

ReactDOM.render(<PropExample/>, document.getElementById('propExample'));