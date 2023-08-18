import { useState, useEffect } from "react";
// import { articles as initialArticles } from "../mocks/articles.json";
import "./blog.css";
import { Link } from "react-router-dom";
import { handleDate } from "../utils/date";

export function Blog() {
  // "_id"
  // "title"
  // "subtitle"
  // "description"
  // "content"
  // "image"
  // "createdAt"
  // "updatedAt"

  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("ascending")  
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://admin.dgbdevelopment.com/article/ordering/${order}/${query}`
    )
      .then((result) => result.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch(() => {
        console.log({ message: "Error al buscar en el servidor" });
      });
  }, [query, order])  

  const handleSubmitQuery = (e) => { 
    e.preventDefault();
    setQuery(e.target.article_search.value)
  }  

  const handleClickOrder = (e) => {
    e.target.parentElement.parentElement.blur()
    setOrder(e.target.getAttribute("data-order"));
  }

  const handleClean = () => {
    setQuery("");
    setOrder("ascending");
  }

  return (
    <section className="blog-container">
      {articles && (
        <>
          {(query !== '' || order !== 'ascending') && 
            <button className="clean-filters" onClick={handleClean}>Limpiar filtros</button>
          }
          <div className="blog-navbar">
            <div className="blog-order">
              <div className="blog-select" tabIndex={0}>
                <div className="select-title">
                  <span>Ordenar</span>
                  <span>∨</span>
                </div>
                <div className="select-option">
                  <span data-order="descending" onClick={handleClickOrder}>Más recientes primero</span>
                </div>
                <div className="select-option">
                  <span data-order="ascending"onClick={handleClickOrder} >Más antiguos primero</span>
                </div>
              </div>
            </div>
            <div className="blog-search">
              <form className="blog-form" autoComplete="off" onSubmit={handleSubmitQuery} >
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
            <div className="title">
            <h1 className="neu-text">Artículos publicados</h1>
            {query !== "" &&<p> Artículos que contienen &ldquo;{query}&rdquo;</p>}
            <hr />
            </div>
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


