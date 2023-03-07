import { useEffect, useState } from "react";
import { IFetch } from "@/interfaces/IFetch";
import axios from "axios";

export default function useFetchData({ url }: IFetch) {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setFetchedData(response.data.result))
      .catch((error) => setError(error.message));
  }, [url]);

  return { fetchedData, error };
}
