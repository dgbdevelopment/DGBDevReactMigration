import { useState } from "react";
import { articles as initialArticles } from "../mocks/articles.json";
import "./blog.css";
import { Link } from "react-router-dom";

export function Blog() {
  // "_id"
  // "title"
  // "subtitle"
  // "description"
  // "content"
  // "image"
  // "createdAt"
  // "updatedAt"

  const [articles, setArticles] = useState(initialArticles);
  const [query, setQuery] = useState("");

  const handleDate = (d) => {
    const date = new Date(d);
    return `${date.getDate()} de ${date.toLocaleString("default", {
      month: "long",
    })} de ${date.getFullYear()}`;
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    setQuery(e.target.article_search.value)    
  }

  return (
    <section className="blog-container">
      {articles && (
        <>
          <div className="blog-navbar">
            <div className="blog-order">
              <div className="blog-select" tabIndex={0}>
                <div className="select-title">
                  <span>Ordenar</span>
                  <span>∨</span>
                </div>
                <div className="select-option">
                  <span data-query={query}>Más recientes primero</span>
                </div>
                <div className="select-option">
                  <span data-query={query}>Más antiguos primero</span>
                </div>
              </div>
            </div>
            <div className="blog-search">
              <form className="blog-form" autoComplete="off" onSubmit={handleSubmit} >
                <input
                  type="text"
                  name="article_search"
                  placeholder="⌕"
                  title="Buscar artículo"
                  onBlur={(e)=> e.target.value=""}
                />
              </form>
            </div>
          </div>
          <div className="blog-articles">
            <h1>Artículos publicados</h1>
            {query !== "" &&<p> Artículos que contienen &ldquo;{query}&rdquo;</p>}
            <hr />
            {articles.map((article) => (
              <div key={article._id} className="article-container">
                <div className="article-top">
                  <div className="article-img">
                    <img
                      src={`https://admin.dgbdevelopment.com/assets/img/imguploads/${article.image}`}
                    />
                  </div>
                  <div className="article-title">
                    <h2>{article.title}</h2>
                    <h3>{article.subtitle}</h3>
                  </div>
                </div>
                <div className="article-description">
                  <p>{article.description}</p>
                </div>
                <div className="article-footer">
                  <span className="article-date">
                    {`${handleDate(article.createdAt)}`}
                  </span>
                  <Link
                    className="article-button"
                    to={`/blog/${article._id}`}
                  >
                    Leer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

{
  /* <div key={article._id} className="blog-article">
                <div className="article-header">
                  <div className="article-title">
                    <h1>${article.title}</h1>
                  </div>
                  <div className="article-subtitle">
                    <h2>${article.subtitle}</h2>
                  </div>
                </div>
                <div className="article-date">
                  {`${handleDate(article.createdAt)}`}
                </div>
                <div className="article-img">
                  <img
                    src={`https://admin.dgbdevelopment.com/assets/img/imguploads/${article.image}`}
                    alt={`Imagen de cabecera de ${article.title}`}
                  />
                </div>
                <div className="article-description">{article.description}</div>
                <div className="article-content">{article.content}</div>
              </div> */
}
