import { useEffect, useState } from 'react';

export function useApiData<T>(fetcher: (signal?: AbortSignal) => Promise<T[]>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetcher(controller.signal)
      .then(setData)
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err.message);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
    // fetcher is a stable module-level reference in all callers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}
