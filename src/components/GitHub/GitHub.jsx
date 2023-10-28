import { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/pankaj-kb")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div
      className="text-center m-4 
  bg-gray-400 text-white"
    >
      <h1 className="text-3xl">GitHub Followers: {data.followers}</h1>
      <h1 className="text-3xl">ID: {data.id}</h1>
      <img className="" src={data.avatar_url} alt="profile pic" width={200} height={200} />
    </div>
  );
}

export default GitHub;
