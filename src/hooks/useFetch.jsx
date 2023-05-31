import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => setData(jsonRes))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
