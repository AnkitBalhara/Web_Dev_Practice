import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const APIData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };
    APIData();
  }, []);

  return (
    <>
      <h1>Fetching Data:-</h1>
      <p>
        {data.map((element) => {
          return (
            <div
              style={{
                border: "2px solid white",
                margin: "3px",
                padding: "5px",
              }}
            >
              <div>{element.id}</div>
              <div>Title : {element.title}</div>
              <div>Body : {element.body}</div>
            </div>
          );
        })}
      </p>
      {/* <pre>{data && JSON.stringify(data,null,2)}</pre> */}
      {/* <p>{error && error}</p> */}
    </>
  );
};

export default App;
