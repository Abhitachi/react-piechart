import React, { useEffect, useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import MuiSlider from "./components/MuiSlider";
import Navbar from "./components/Navbar";
import Tenure from "./components/Tenure";

function App() {
  const [homePrice, setHomePrice] = useState(10000);
  const [downPayment, setDownPayment] = useState(30000);
  const [loanAmount, setLoanAmount] = useState(70000);
  const [interestRate, setInterestRate] = useState(7);
  const [period, setPeriod] = useState(10);

  const handlePeriodChange = (e) => {
    setPeriod(e);
  };

  let LoanChange = Math.floor(emiCalculator(homePrice, interestRate));

  function emiCalculator(p, r, t = 1) {
    let emi;

    r = r / (12 * 100); // one month interest
    t = t * 12; // one month period
    emi = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);

    return emi + 0.000414;
  }

  useEffect(() => {
    emiCalculator(loanAmount, interestRate, period);
  }, [loanAmount, interestRate, homePrice, downPayment, period]);

  const handleHomePriceChange = (newValue) => {
    console.log(newValue);
    setHomePrice(newValue);
  };

  const handleDownPaymentChange = (newValue) => {
    setDownPayment(newValue);
  };
  const handleLoanAmountChange = (newValue) => {
    setLoanAmount(newValue);
  };
  const handleInterestRateChange = (newValue) => {
    setInterestRate(newValue);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="sliders">
          <MuiSlider
            title="Home Price"
            def={1000}
            min={0}
            max={100000}
            onValueChange={handleHomePriceChange}
          />
          <MuiSlider
            title="Down Payment"
            def={6000}
            min={0}
            max={30000}
            onValueChange={handleDownPaymentChange}
          />
          <MuiSlider
            title="Loan Amount"
            def={4000}
            min={0}
            max={70000}
            onValueChange={handleLoanAmountChange}
          />
          <MuiSlider
            title="Interest Rate"
            def={5}
            min={2}
            max={18}
            onValueChange={handleInterestRateChange}
          />
          <div style={{ marginTop: "20px", width: "100%" }}>
            <Tenure handleChange={handlePeriodChange} period={period} />
          </div>
        </div>
        <div className="chart-container">
          <Chart
            homePrice={homePrice}
            downPayment={downPayment}
            loanAmount={loanAmount}
            interestRate={interestRate}
            LoanChange={LoanChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
