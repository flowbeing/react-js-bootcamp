import { useState } from "react";

// Custom Hook - useFetch
// all state updates that's triggered in this hook (function) will rerender
// the components that use this hook.
// returns isFetching, error, data.
export function useFetch(fetchFn, initialValueData) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState(initialValueData);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);

        const fetchedData = await fetchFn();
        setData(fetchedData);
      } catch (err) {
        setError(true);
        setIsFetching(false);
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    data: data,
    erro: error,
    isFetching: isFetching,
  };
}
