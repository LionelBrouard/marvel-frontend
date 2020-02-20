import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbarre from "../components/Searchbarre";
import Comic from "../components/Comic";

function Comics() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const tab = [];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/comics");
      console.log(response.data);
      setData(response.data.data.results);
      // console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Chargement en cours</div>
      ) : (
        <div>
          <div>
            <Searchbarre search={search} setSearch={setSearch} />
          </div>
          {data.map((elem, index) => {
            return (
              <>
                <div key={index} className="wrapper comics-gen">
                  <Comic elem={elem} />
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comics;
