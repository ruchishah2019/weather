import React from "react";
import { convertTemp, convertDate } from "../../common/utility";
import SingleLine from "../LineChart/singleLineChart";

const Row = (props) => {
  const row = props.data;
  return (
    <tr>
      <td>{convertTemp(row.main.temp)}</td>
      <td>{row.main.humidity}</td>
      <td>{convertTemp(row.main.temp_min)}</td>
      <td>{convertTemp(row.main.temp_max)}</td>
      <td>{convertDate(row.dt)}</td>
    </tr>
  );
};

const Table = (props) => {
  const list = props.data;
  return (
    <table className="table table-bordered table-hover table-striped table-responsive">
        <caption>Temperature Data in C</caption>
      <thead>
        <tr>
          <th>Currnet Temp</th>
          <th>Humidity</th>
          <th>Minimum temperature</th>
          <th>Maximum temperature</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {list.map((ls, ind) => {
          return <Row data={ls} key={ind} />;
        })}
      </tbody>
    </table>
  );
};

const dataprepareForChart = (list) => {
  const dataArr = [];
  list.map((l) => {
    const newLs = {
      date: l.dt_txt,
      temp: l.main.temp,
      pressure: l.main.pressure,
      humidity: l.main.humidity,
    };
    dataArr.push(newLs);
    return l;
  });
  return dataArr;
};

const WhetherTable = (props) => {
  const data = props.data;
  const chartData = dataprepareForChart(data.list);
  return (
      <div className="panel panel-default">
        <div className="panel panel-heading">
          {data.city.name}
          <SingleLine data={chartData} dataKey="temp" label="Temperature"  color="#00ff00"/>
          <SingleLine data={chartData} dataKey="pressure" label="Pressure" />
          <SingleLine
            data={chartData}
            dataKey="humidity"
            label="Humidity"
            color="#8884d8"
          />
        </div>
        <div className="panel panel-body">
          <Table data={data.list} />
        </div>
      </div>
  );
};

export default WhetherTable;
