import React from 'react';
import ReactDOM from 'react-dom';

class ABVfromOGandSG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      og: 1.05,
      fg: 1.01,
      message: 'The ABV is ' + this.abv(1.05, 1.01) + '%'
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleOgChange = this.handleOgChange.bind(this);
    this.handleFgChange = this.handleFgChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    // this.calcabv();
  }

  // calcabv() {
  //   const abv = (100 * (og.value - fg.value) / 0.75).toFixed(1);
  //   this.state.message = 'The ABV is ' + abv + '%';
  // return;
  // }

  abv(og, fg) {
    return ((100 * (og - fg)) / 0.75).toFixed(1);
  }

  updateMessage(abv) {
    this.state.message = 'The ABV is ' + abv + '%';
  }

  // handleChange(event) {
  //   this.setState({
  //     name: event.target.value,
  //     og: event.target.og,
  //     fg: event.target.og
  //    });
  // }

  handleOgChange(event) {
    this.setState({
      og: event.target.value
    });
    // alert('OG: ' + event.target.value);
    this.updateMessage(this.abv(event.target.value, this.state.fg));
  }

  handleFgChange(event) {
    this.setState({
      fg: event.target.value
    });
    this.updateMessage(this.abv(this.state.og, event.target.value));
  }

  // handleSubmit(event) {
  //   alert('Data was submitted: ' + this.state.og);
  //   this.calcabv();
  //   event.preventDefault();
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ABV from OG and FG</h2>
        <div>
          <label htmlFor="og">Original gravity</label>
          <input
            type="number"
            id="og"
            step=".001"
            value={this.state.og}
            onChange={this.handleOgChange}
          />
        </div>
        <div>
          <label htmlFor="fg">Final gravity</label>
          <input
            type="number"
            id="fg"
            step=".001"
            value={this.state.fg}
            onChange={this.handleFgChange}
          />
        </div>
        <div>{this.state.message}</div>
        {/* <p>
            <button onClick="calcabv">Calculate ABV</button>
          </p> */}
        {/* <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Calculate ABV" /> */}
      </form>
    );
  }
}

export default ABVfromOGandSG;

// export default function ABVfromOGandSG() {
// var og = '1.05';
// var fg = '1.01';
// var message = 'Enter gravities then click below';

// function calcabv() {
//   const abv = (1.646 * brix.value - 2.703 * (145 - 145 / sg.value)-1.794).toFixed(1);
//   this.message = 'The ABV is ' + abv + '%';
//   return;
// }

//   return (
//     <div id="abvogfg">
// <h2>ABV from OG and FG</h2>
// <p>
//   <label for="og">Original gravity</label>
//   <input type="number" id="og" v-model="og" step=".001" value={og} />
// </p>
// <p>
//   <label for="fg">Final gravity</label>
//   <input type="number" id="fg" v-model="fg" step=".001" value={fg} />
// </p>
// <p>{message}</p>
// <p>
//   <button onClick="calcabv">Calculate ABV</button>
// </p>
//     </div>
//   );
// }
