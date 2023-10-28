import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function GitHub() {

  const data = useLoaderData();
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <div
      className="text-center m-4 
  bg-gray-400 text-white"
    >
      <h1 className="text-3xl">
      GitHub Followers: {data.followers}
      </h1>
      <h1 className="text-3xl">ID: {data.id}</h1>
      <img
        className=""
        src={data.avatar_url}
        alt="profile pic"
        width={200}
        height={200}
      />
      <a target="_blank" rel="noreferrer" href={data.html_url}>
        Visit Profile
      </a>
    </div>
  );
}

export default GitHub;

export const gitHubInfoLoader = async () => {
  const userName = "pankaj-kb"
  const response = await fetch(`https://api.github.com/users/${userName}`);
  return response.json();
}
