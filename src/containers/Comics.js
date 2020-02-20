import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbarre from "../components/Searchbarre";
import Comic from "../components/Comic";

function Comics() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvel-neil.herokuapp.com/comics"
      );
      console.log(response.data);
      setData(response.data.data.results);
      // console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const tab = [];

  return (
    <div>
      {isLoading ? (
        <div>Chargement en cours</div>
      ) : (
        <div>
          <div>
            <Searchbarre />
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
