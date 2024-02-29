import { useState } from "react";

// Custom Hook - useFetch();
// 1. All state updates that's triggered in this hook (function) will re-render
//    the components that use this hook.
// 2. Returns isFetching, error, data.
// 3. Every component that uses this will get its own snapshot of this component
//    just as components that use default hooks like 'useState' would only get
//    a snapshot of their instance of that hook that no other component function
//    can access.
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
