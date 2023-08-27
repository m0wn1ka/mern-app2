// import axios from "axios";
// import { useEffect, useState } from "react";
// const SeePosts=(async)=>{
    
//     // useEffect
//     useEffect(() => {
//         const fetchData=async()=>{
//         const res= await axios.get("http://127.0.0.1:3001/forum")
//         console.log(res.data);
        
//         console.log("tupe 1 is ",(res.data[0]));
//         console.log("tupee 2 is  ",(res.data[0]).sayings[0])
//         }
//         fetchData();
//       },[]);

// return<div>seeposts page<br/>

// </div>
// }
// export default SeePosts;
import React, { useEffect, useState } from "react"; // Import useStat
import axios from "axios";

const SeePosts = () => {
  const [postData, setPostData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3001/forum");
        const data = response.data;
        setPostData(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>See Posts</h1>
      <ul>
        {postData.map(post => (
          <li>
            <ul>
              {post.sayings.map((saying) => (
                <li>{saying}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeePosts;
