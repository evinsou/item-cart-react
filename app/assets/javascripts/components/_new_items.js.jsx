var NewItem= React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },
    render() {
        var items= this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            )
        });

        return (
            <div>
                <input ref='name' placeholder='Enter the name of the item' />
                <input ref='description' placeholder='Enter a description' />
                <button onClick={this.handleClick}>Submit</button>
              </div>
              )

        )
    }
});
