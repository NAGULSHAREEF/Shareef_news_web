import React , {useEffect} from 'react'

const Story = () => {
  let isLoading = true;
  let API = "https://hn.algolia.com/api/v1/search?query=html";

  const fecthApiCall = async (url) =>{
    try {
      const data = await fetch(url);
      const json = await data.json();
      isLoading = false;
      console.log(json);
    } catch (error) {
      console.log("Error Getting")
    }
  }
  
  useEffect(() => {
    fecthApiCall(API)
  }, [])
  
  if(isLoading){
    return <>
    <h1>Loading.....</h1>
    </>
  }
  
  return (
    <div>Story</div>
  )
}

export default Story