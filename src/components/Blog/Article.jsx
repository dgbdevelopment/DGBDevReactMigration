import { useParams } from "react-router-dom";

export function Article() {
  
  const { articleId } = useParams();
  return <h1>{ articleId}</h1>
}