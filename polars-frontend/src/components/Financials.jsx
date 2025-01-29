import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Financials = ({ dataFile }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/${dataFile}.json`);

        if (!response.ok) {
          throw new Error(`Failed to fetch ${dataFile}.json`);
        }

        const jsonData = await response.json();
        setData(jsonData);
        setTitle(
          dataFile
            .replace("_", " ")
            .replace("K", "K ")
            .replace(".json", "")
            .replace("_", " ")
        );
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [dataFile]);

  return (
    <>
      <h1
        style={{
          color: "#565c5b",
          textAlign: "center",
          verticalAlign: "center",
        }}
      >
        {title}
      </h1>
      {error && (
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
      )}
      <Table bordered hover variant="light">
        <thead>
          <tr>
            <th>safeNumber</th>
            <th>credit_score_type</th>
            <th>credit_limit_type</th>
            <th>turnover_type</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.safeNumber}</td>
              <td>{item.credit_score_type}</td>
              <td>{item.credit_limit_type}</td>
              <td>{item.turnover_type}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Financials;
