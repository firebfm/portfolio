import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {

    state = { displayBio: false };
   

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio});
    }

    render(){
        return(
            <div>
                <h1>Hello!</h1>
                <p>My name is Simon.</p>
                <p>This is the second paragraph of component.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Toronto.</p>
                            <p>My favorite language is Python.</p>
                            <p>I love pizza.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                        )
                }
                <hr />
                <Projects />
            </div>
        )
    }
}

export default App;