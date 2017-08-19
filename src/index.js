import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, Tooltip, Legend } from 'recharts';
import './index.css';
import 'whatwg-fetch';

var data = [{"stock_ticker": "AAPL", "contract_id": 205371501354273.0, "contract_name": "AAPL171117C00050000", "strike": 50.0, "volume": 0.0, "change": 0.0, "open_int": "0", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 108.2, "expiry": "Nov 17, 2017", "price": 103.6, "bid": 107.25, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 563342563308163.0, "contract_name": "AAPL171117C00055000", "strike": 55.0, "volume": 0.0, "change": 0.0, "open_int": "2", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 103.2, "expiry": "Nov 17, 2017", "price": 105.7, "bid": 102.25, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 729358885076529.0, "contract_name": "AAPL171117C00060000", "strike": 60.0, "volume": 0.0, "change": 0.0, "open_int": "0", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 98.2, "expiry": "Nov 17, 2017", "price": 100.7, "bid": 97.25, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 831262467035083.0, "contract_name": "AAPL171117C00065000", "strike": 65.0, "volume": 0.0, "change": 0.0, "open_int": "0", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 93.25, "expiry": "Nov 17, 2017", "price": 83.75, "bid": 92.3, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 444876287503562.0, "contract_name": "AAPL171117C00070000", "strike": 70.0, "volume": 0.0, "change": 0.0, "open_int": "25", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 88.25, "expiry": "Nov 17, 2017", "price": 90.8, "bid": 87.45, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 936082585024925.0, "contract_name": "AAPL171117C00075000", "strike": 75.0, "volume": 0.0, "change": 0.0, "open_int": "5", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 83.3, "expiry": "Nov 17, 2017", "price": 85.61, "bid": 82.5, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 863796317944902.0, "contract_name": "AAPL171117C00080000", "strike": 80.0, "volume": 0.0, "change": 0.0, "open_int": "85", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 78.3, "expiry": "Nov 17, 2017", "price": 77.55, "bid": 77.35, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 384529382510671.0, "contract_name": "AAPL171117C00085000", "strike": 85.0, "volume": 0.0, "change": 0.0, "open_int": "4", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 73.35, "expiry": "Nov 17, 2017", "price": 75.15, "bid": 72.55, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 512055962151800.0, "contract_name": "AAPL171117C00090000", "strike": 90.0, "volume": 0.0, "change": 0.0, "open_int": "57", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 68.35, "expiry": "Nov 17, 2017", "price": 67.6, "bid": 67.4, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 719348028355932.0, "contract_name": "AAPL171117C00095000", "strike": 95.0, "volume": 0.0, "change": 0.0, "open_int": "41", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 63.4, "expiry": "Nov 17, 2017", "price": 63.35, "bid": 62.45, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 320107370003454.0, "contract_name": "AAPL171117C00100000", "strike": 100.0, "volume": 0.0, "change": 0.0, "open_int": "618", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 58.45, "expiry": "Nov 17, 2017", "price": 61.55, "bid": 57.5, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 531853367900441.0, "contract_name": "AAPL171117C00105000", "strike": 105.0, "volume": 0.0, "change": 0.0, "open_int": "119", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 53.4, "expiry": "Nov 17, 2017", "price": 55.35, "bid": 52.75, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 18134322815409.0, "contract_name": "AAPL171117C00110000", "strike": 110.0, "volume": 10.0, "change": 0.92, "open_int": "266", "cp": 1.88, "cs": "chg", "option_type": "call", "ask": 48.55, "expiry": "Nov 17, 2017", "price": 49.85, "bid": 47.75, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 707080352274596.0, "contract_name": "AAPL171117C00115000", "strike": 115.0, "volume": 3.0, "change": -2.58, "open_int": "3839", "cp": -5.49, "cs": "chr", "option_type": "call", "ask": 43.6, "expiry": "Nov 17, 2017", "price": 44.42, "bid": 42.8, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 573486673380455.0, "contract_name": "AAPL171117C00120000", "strike": 120.0, "volume": 0.0, "change": 0.0, "open_int": "8099", "cp": 0.0, "cs": "chb", "option_type": "call", "ask": 38.75, "expiry": "Nov 17, 2017", "price": 40.88, "bid": 38.0, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 576005018014242.0, "contract_name": "AAPL171117C00125000", "strike": 125.0, "volume": 1.0, "change": -1.85, "open_int": "7386", "cp": -5.04, "cs": "chr", "option_type": "call", "ask": 34.0, "expiry": "Nov 17, 2017", "price": 34.85, "bid": 33.25, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 1015367440391525.0, "contract_name": "AAPL171117C00130000", "strike": 130.0, "volume": 33.0, "change": 0.03, "open_int": "14817", "cp": 0.1, "cs": "chg", "option_type": "call", "ask": 29.3, "expiry": "Nov 17, 2017", "price": 29.58, "bid": 28.7, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 115662811114856.0, "contract_name": "AAPL171117C00135000", "strike": 135.0, "volume": 20.0, "change": 0.24, "open_int": "4831", "cp": 0.95, "cs": "chg", "option_type": "call", "ask": 24.8, "expiry": "Nov 17, 2017", "price": 25.38, "bid": 24.4, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 789269818451418.0, "contract_name": "AAPL171117C00140000", "strike": 140.0, "volume": 4.0, "change": -0.09, "open_int": "14635", "cp": -0.43, "cs": "chr", "option_type": "call", "ask": 20.4, "expiry": "Nov 17, 2017", "price": 20.65, "bid": 20.15, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 210937051430859.0, "contract_name": "AAPL171117C00145000", "strike": 145.0, "volume": 103.0, "change": -0.23, "open_int": "17288", "cp": -1.37, "cs": "chr", "option_type": "call", "ask": 16.5, "expiry": "Nov 17, 2017", "price": 16.56, "bid": 16.25, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 274235480423542.0, "contract_name": "AAPL171117C00150000", "strike": 150.0, "volume": 294.0, "change": -0.41, "open_int": "35334", "cp": -3.1, "cs": "chr", "option_type": "call", "ask": 12.95, "expiry": "Nov 17, 2017", "price": 12.8, "bid": 12.75, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 1023283001797888.0, "contract_name": "AAPL171117C00155000", "strike": 155.0, "volume": 553.0, "change": -0.37, "open_int": "7600", "cp": -3.67, "cs": "chr", "option_type": "call", "ask": 9.8, "expiry": "Nov 17, 2017", "price": 9.7, "bid": 9.65, "reporting_group": "OPRA"}, {"stock_ticker": "AAPL", "contract_id": 753327641775311.0, "contract_name": "AAPL171117C00160000", "strike": 160.0, "volume": 652.0, "change": -0.29, "open_int": "25209", "cp": -3.91, "cs": "chr", "option_type": "call", "ask": 7.2, "expiry": "Nov 17, 2017", "price": 7.13, "bid": 7.05, "reporting_group": "OPRA"}]

class DataFetcher {
    constructor(props) {

        this.state = {
            data: data
        };

        this.ticker = "AAPL";
        // this.fetchData();
        this.fetchData = this.fetchData.bind(this);
        this.updateData = this.updateData.bind(this);
        this.setTicker = this.setTicker.bind(this);
        this.setData = this.setData.bind(this);
        this.getData = this.getData.bind(this);
        console.log(this.state.data)
    }

    setData(data) {
        this.state.data = data;
    }

    getData() {
        return this.state.data;
    }

    fetchData() {
        fetch('http://data.kpitzen.io/optiondata/' + this.ticker, {
            mode: 'cors',    
        }).then(response => this.setData(response.json))
          .then(console.log(this.state.data))
          .catch(error => console.log(error));
    }

    updateData(ticker) {
        this.setTicker(ticker);
        this.fetchData();
    }

    setTicker(ticker) {
        this.ticker = ticker;
    }

}

class GraphInput extends React.Component {
  constructor(dataFetcher) {
    super();
    this.state =  {
        value: "AAPL",
    };
    this.dataFetcher = new DataFetcher();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }

  render() {
    return (
        <div className="search">
          <input type="text" onChange={this.handleChange} value={this.state.value} />
          <input type="submit" value="Search" className="search-button" id="ticker-button" onClick={() => this.dataFetcher.updateData(this.state.value)}/>
        </div>
    );
  }
}

class Graph extends React.Component {
  constructor(props) {
      super();
      this.graphInput = new GraphInput();
  }


  render() {
    // const status = 'Next player: X';

    return (<div>
                <LineChart width={350} height={300} data={ this.graphInput.dataFetcher.state.data }>
                    <XAxis dataKey="strike"/>
                   <Line type="monotone" dataKey="ask" stroke="#8884d8" />
                   <Line type="monotone" dataKey="price" stroke="#66ccff" />
                   <Line type="monotone" dataKey="bid" stroke="#dbdbdb" />
                   <Tooltip />
                   <Legend />
                </LineChart>

                <GraphInput />
            </div>
    );
  }
}


// // ========================================

ReactDOM.render(
  <Graph />,
  document.getElementById('graph')
);
