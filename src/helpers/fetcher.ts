export const fetcher = (...args: [Request]) =>
  fetch(...args).then((res) => res.json());
