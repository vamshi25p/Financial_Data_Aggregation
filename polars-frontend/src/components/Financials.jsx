import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Financials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/company_aggregations.json");

        if (!response.ok) {
          throw new Error(`Failed to fetch the json file`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1
        style={{
          color: "#565c5b",
          textAlign: "center",
          verticalAlign: "center",
        }}
      >
        Company Aggregations
      </h1>

      <Table bordered hover variant="light">
        <thead>
          <tr>
            <th>country_code</th>
            <th>companies_count</th>
            <th>active_companies_count</th>
            <th>inactive_companies_count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.country_code}</td>
              <td>{item.companies_count}</td>
              <td>{item.active_companies_count}</td>
              <td>{item.inactive_companies_count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Financials;
