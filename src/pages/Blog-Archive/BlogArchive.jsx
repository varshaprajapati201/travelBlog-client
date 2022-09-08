import Container from "react-bootstrap/esm/Container";
import Header from "../../shared/Header";
import { Footer } from "../../shared/uu";
import { getArticle,deleteArticle} from "../../Service/api";
import { useEffect,useState } from "react";
import Button from '@mui/material/Button'; 
import { Link } from "react-router-dom";
//import ShowMoreText from "react-show-more-text";


export const BlogArchive=()=>{

  // const [expand, setExpand] = useState(false);
  // const onClicktotext = () => {
  //   setExpand(!expand);
  // };

const [articles,setArticles]= useState([]);

useEffect(()=>{
  getAllArticle();
},[]);

const getAllArticle = async () => {
  let response = await getArticle();
  // console.log(response.data);
  setArticles(response.data);
}

const deleteArticleDetail = async (id)=>{
  await deleteArticle(id);
  getAllArticle();
}

    return (
        <>

<Header fixed="top" />

<section id="blog-archive-section" class="container w-container">
    <section class="section-title-wrapper">
    <h2 class="section-title ">Blog Archive</h2>
    </section>


    { articles.map(Article=>(<Container>
      <h2>{Article.title}</h2>
      <h4>{Article.category}</h4>
      <p>{Article.content}</p>
      {/* <p><ShowMoreText
        lines={2}
        more={"Show More"}
        less={"Show Less"}
        onClick={onClicktotext}
        expanded={expand}
        width={100}
      >
        {Article.content}
      </ShowMoreText></p> */}
      <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${Article._id}`}>Edit</Button>
      <Button variant="outlined"  color="error" onClick={()=>deleteArticleDetail(Article._id)}>Delete</Button>
      <br></br>
      <br></br><br></br>
      </Container>
    ))
    }

</section>




<Footer />
  </>    
    )
}