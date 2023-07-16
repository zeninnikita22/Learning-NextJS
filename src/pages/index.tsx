import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const callAPI = async () => {
  try {
    const res = await fetch(`/api/hello`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default function Home() {
  const helloQuery = useQuery({
    queryKey: ["hello"],
    queryFn: callAPI,
    staleTime: 0,
  });

  console.log(helloQuery.data);
  if (helloQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (helloQuery.isError) {
    return <div>An error occurred</div>;
  }

  return <div>Home</div>;
}
