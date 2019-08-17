import * as React from 'react';
import './App.css';
import service from './services/list-services';

class App extends React.Component<{}, {}> {

  private Services: service;
  constructor(props: any) {
    super(props);
    this.Services = new service();

  }
  public componentDidMount() {
    const test = this.Services.getFood();
    console.log(test);

  }
  // const ss:any=service.getFood();
  public render() {

    return (
      <div className="App">
        <span>I am Farhad</span>
        Hello world!
      </div>
    );
  }
}

export default App;
