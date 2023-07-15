import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const helloQuery = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const response = await fetch("/api/hello");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  console.log("blah");
  // const callAPI = async () => {
  //   try {
  //     const res = await fetch(`/api/hello`);
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div>
      <main>{/* <button onClick={callAPI}>Make API Call</button> */}</main>
      {/* <div>{helloQuery.data}</div> */}
    </div>
  );
}
