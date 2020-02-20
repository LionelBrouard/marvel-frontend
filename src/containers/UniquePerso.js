import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UniquePerso(elem) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvel-neil.herokuapp.com/unique_perso/" + id
      );
      setData(response.data.data.results);
      // console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      {isLoading ? (
        <div>Chargement en cours</div>
      ) : (
        <div>
          {data.map((elem, index) => {
            return (
              <>
                <div className="wrapper comic-perso-gen">
                  <h4 className="comic-perso">{elem.title}</h4>
                  <img
                    className="comic-perso-picture"
                    src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                    alt="Comic picture"
                  ></img>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UniquePerso;
