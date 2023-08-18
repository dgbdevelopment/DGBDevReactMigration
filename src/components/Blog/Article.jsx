import { useParams } from "react-router-dom";
import "./article.css";
import "./prism.css";
import { useEffect, useState, useRef } from "react";
import { handleDate } from "../../utils/date";
import parse from "html-react-parser";

export function Article() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(undefined);

  const bg = useRef();

  let totalScroll;  
  // eslint-disable-next-line no-unused-vars
  let initialScroll;

  useEffect(() => {
    fetch("https://admin.dgbdevelopment.com/article/getarticle/" + articleId)
      .then((result) => result.json())
      .then((data) => setArticle(data.article));

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => { 
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);    
    }
  }, []);

  function placeBg(totalScroll) {
    bg.current.style.top = -(((scrollY / totalScroll) * bg.current.offsetHeight) / 2) + "px";
  }

  function handleResize() {
    totalScroll = document.body.offsetHeight - window.innerHeight;
    placeBg(totalScroll);
  }

  function handleScroll() {
    initialScroll = window.scrollY;
    totalScroll = document.body.offsetHeight - window.innerHeight;
    let currentScroll = scrollY;    
    placeBg(totalScroll);
    initialScroll = currentScroll;
  }

  return (
    article && (
      <>
        <div className="article-bg" ref={bg}></div>
        <div className="blog-article">
          <div className="article-header">
            <div className="article-title">
              <h1>{article.title}</h1>
            </div>
            <div className="article-subtitle">
              <h2>{article.subtitle}</h2>
            </div>
          </div>
          <div className="article-date">{`${handleDate(
            article.createdAt
          )}`}</div>
          <div className="article-img">
            <img
              src={`https://admin.dgbdevelopment.com/assets/img/imguploads/${article.image}`}
              alt={`Imagen de cabecera de ${article.title}`}
            />
          </div>
          <div className="article-description">{article.description}</div>
          <div className="article-content">{parse(article.content)}</div>
        </div>
      </>
    )
  );
}
