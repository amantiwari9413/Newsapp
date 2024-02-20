import { useEffect, useState } from "react";
import Card from "./componet/Card";
import Page from "./componet/page";
function App(props) {
  let { contury, category, newstype, squery } = props;
  const [allArtical, setAllAritical] = useState("");
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  let url = `https://newsapi.org/v2/${newstype}?${
    newstype === "top-headlines" ? `country=${contury}` : `${squery}`
  }&page=${page}${
    newstype === "top-headlines"
      ? `&category=${category}&`
      : "&sortBy=publishedAt&"
  }apiKey=14484fb93180464aa61cd4b398cd697e`;
  console.log("i am in the body of the function ");

  // heir is the useeffect section

  useEffect(() => {
    async function fetchdata() {
      let rawdata = await fetch(url);
      let origanldata = await rawdata.json();
      setAllAritical(origanldata.articles);
      console.log("i am in the use effect ");
      settotalResults(origanldata.totalResults);
      console.log(totalResults);
    }
    fetchdata();
  }, [page, url]);

  return (
    <>
      {!totalResults && <h1>NO RESULT</h1>}
      <div className="bg-gradient-to-r from-slate-300  to-gray-300">
        {/* this is the all news section  */}

        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-auto">
          {allArtical &&
            allArtical.map((value, index) => {
              return (
                <Card
                  key={index}
                  title={value.title}
                  description={value.description}
                  urltoimage={value.urlToImage}
                  url={value.url}
                  publishedAt={value.publishedAt}
                  author={value.author}
                />
              );
            })}
        </div>
      </div>
      {/* this is end of the card item */}

      <Page page={page} setpage={setpage} totalResults={totalResults} />
    </>
  );
}

export default App;
