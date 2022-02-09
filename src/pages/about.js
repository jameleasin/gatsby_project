import React from 'react';
import Layout from "../components/Layout"
//react component- must capitalise
import SEO from "../components/SEO"
import {StaticImage} from'gatsby-plugin-image'
import {Link,graphql} from 'gatsby'
import RecipesList from "../components/RecipesList"

const About =  ({ data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) =>  {
  return (
  <Layout>
    <SEO title="About" />
   <main className="page">
     <section className="about-page">
       <article>
         <h2>Taiyaki deep v </h2>
         <p> shabby chic gentrify salvia post-ironic direct trade 
          locavore biodiesel succulents. 8-bit bicycle rights fam 
          bitters lyft.</p>
         <p> Af prism vegan drinking vinegar banh mi fixie.
          Succulents skateboard hella pinterest food truck 
          pour-over selfies austin four loko</p>
         <Link to="/contact"
         className="btn">
           Contact
         </Link>
       </article>
       <StaticImage src="../assets/images/about.jpeg" 
       alt="Person Pouring Salt in Bowl"
       className="about-img"
       placeHolder="blurred"
       />
    </section>
    <section className="featured-recipes">
      <h5>Take a look at our Featured Recipes for the week</h5>
      <RecipesList recipes={recipes} />
    </section>
   </main>
  </Layout>
  )
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export default About;

