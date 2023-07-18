import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { trpc } from "./utils/trpc";

// const callAPI = async () => {
//   try {
//     const res = await fetch(`/api/hello`);
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

export default function Home() {
  // 💡 Tip: CMD+Click (or CTRL+Click) on `greeting` to go to the server definition
  const result = trpc.getData.useQuery();
  console.log(result.data);
  if (!result.data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      {/**
       * The type is defined and can be autocompleted
       * 💡 Tip: Hover over `data` to see the result type
       * 💡 Tip: CMD+Click (or CTRL+Click) on `text` to go to the server definition
       * 💡 Tip: Secondary click on `text` and "Rename Symbol" to rename it both on the client & server
       */}
      {/* <h1>{`This is ${result.data.text}, his id is ${result.data.text}`}</h1> */}
    </div>
  );
}
// const helloQuery = useQuery({
//   queryKey: ["hello"],
//   queryFn: callAPI,
//   staleTime: 0,
// });

// console.log(helloQuery.data);
// if (helloQuery.isLoading) {
//   return <div>Loading...</div>;
// }

// if (helloQuery.isError) {
//   return <div>An error occurred</div>;
// }

// return <div>Home</div>;
