import { PieChart } from '@mui/x-charts';
import React from "react";

const Chart = ({ homePrice, downPayment, loanAmount, interestRate,LoanChange }) => {

  
  return (
    <>
      <h5 style={{ marginLeft: "70px" }}>Monthly Payment: ${LoanChange}</h5>
      <PieChart
        colors={["#ff99c2", "#809fff", "#47d147", "ffff66"]}
        series={[
          {
            data: [
              { id: 0, value: homePrice, label: "HomePrice" },
              { id: 1, value: downPayment, label: "DownPayment" },
              {
                id: 2,
                value: (interestRate / 100) * loanAmount,
                label: "interestRate",
              },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </>
  );
};

export default Chart;
