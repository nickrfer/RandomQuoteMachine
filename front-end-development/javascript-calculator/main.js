
class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { calculatorInput: 0 };
    }

    updateInput = (input) => {
		  this.setState(
        {
          calculatorInput: input
        }
      );
	};

    render() {
        return (
          <div className="row">
            <div className="col-md-5">
            </div>
            <div className="col-md-2">
              <div className="row top-buffer">
                <div className="col-md-2"><button className="btn btn-secondary">C</button></div>
                <div className="col-md-2">
                  <input type="text" size="12" disabled="true"
                    value={this.state.calculatorInput} />
                </div>
              </div>
              <div className="row top-buffer">
                <div className="col-md-2"><button className="btn btn-outline-primary" onClick={() => this.updateInput(7)}>7</button></div>
                <div className="col-md-2"><button className="btn btn-outline-primary">8</button></div>
                <div className="col-md-2"><button className="btn btn-outline-primary">9</button></div>
                <div className="col-md-2"><button className="btn btn-primary">÷</button></div>
              </div>
              <div className="row top-buffer">
                <div className="col-md-2"><button className="btn btn-outline-primary">4</button></div>
                <div className="col-md-2"><button className="btn btn-outline-primary">5</button></div>
                <div className="col-md-2"><button className="btn btn-outline-primary">6</button></div>
                <div className="col-md-2"><button className="btn btn-primary">×</button></div>
              </div>
              <div className="row top-buffer">
                <div className="col-md-2"><button className="btn btn-outline-primary">1</button></div>
                <div className="col-md-2"><button className="btn btn-outline-primary">2</button></div>
                <div className="col-md-2"><button className="btn btn-outline-primary">3</button></div>
                <div className="col-md-2"><button className="btn btn-primary">-</button></div>
              </div>
              <div className="row top-buffer">
                <div className="col-md-2"><button className="btn btn-outline-primary">0</button></div>
                <div className="col-md-2"><button className="btn btn-outline-primary">.</button></div>
                <div className="col-md-2"><button className="btn btn-outline-primary">=</button></div>
                <div className="col-md-2"><button className="btn btn-primary">+</button></div>
              </div>
            </div>
          </div>
        );
    }
}

const container = document.getElementById('container');
ReactDOM.render(
  <Calculator />, container
);
