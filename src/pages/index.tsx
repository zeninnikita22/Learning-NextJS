import Form from "./Form";
import Posts from "./Posts";
import { useState } from "react";

export default function Home({}) {
  const [id, setId] = useState("");

  return (
    <>
      <Form id={id} setId={setId} />
      <Posts id={id} />
    </>
  );
}
