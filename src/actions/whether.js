import axios from "axios";
const API_KEY = "44394f5da5066039de5a5a786d176c62";

export const updateLoadingStatus = (status) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATESTATUS",
      value: status,
    });
  };
};

export const updateSearchCity = (term) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATECITY",
      value: term,
    });
  };
};

export const getCityData = (city) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
      axios
        .get(url)
        .then((response) => {
          const data = response.data;
          dispatch({
            type: "UPDATEDATA",
            value: data,
          });
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
