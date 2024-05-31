import { Context } from "../App";
import { useContext } from "react";

function ComponentC({}) {
  const name = useContext(Context);
  return <div>{name}</div>;
}

export default ComponentC;
