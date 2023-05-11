import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    console.log("fetching");
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => setData(jsonRes))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  function refetch(url) {
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => setData(jsonRes))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return { data, error, loading, refetch };
}

export default useFetch;
