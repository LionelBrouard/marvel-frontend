import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Searchbarre from "../components/Searchbarre";
const Perso = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvel-neil.herokuapp.com/perso"
      );
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
          <Searchbarre search={search} setSearch={setSearch} />
          {data.map((elem, index) => {
            return (
              <>
                <div key={index} className="wrapper perso-card-gen">
                  <Link to={"/unique_perso/" + elem.id}>
                    <Card elem={elem} />
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Perso;
