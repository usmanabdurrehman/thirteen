import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Dashboard() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
