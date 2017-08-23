class Counter extends React.Component {
    state = {
        counter: 0
    }

    increment() {
        this.setState(state => ({counter: this.state.counter + 1}));
    }

    render = () => {
        <div>
            {this.state.counter}
            <button onClick={this.increment.bind(this)}>Add</button>
        </div>
    }
}