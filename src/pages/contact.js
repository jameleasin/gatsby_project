import React from 'react';
import Layout from "../components/Layout"
import {Link,graphql} from 'gatsby'
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
  <Layout>
    
    <SEO title="Contact" />
    <div>
    <main className="page">
     <section className="contact-page">
      <article className="contact-info">
          <h3>Want to get in Touch?</h3>
          <p>I'm baby meditation farm-to-table paleo, 
            ramps crucifix 3 wolf moon hexagon raclette
            quinoa activated charcoal.</p>
          <p>Copper mug 
            keffiyeh roof party literally, stumptown 
            migas mumblecore shaman lo-fi squid selfies prism.</p>
          <p>Semiotics copper mug subway tile, raclette 
            shoreditch whatever brooklyn venmo yuccie 
            typewriter blog keffiyeh marfa fingerstache 
            chartreuse.</p>
          </article>

          <article>
            <form
              action="https://formspree.io/f/xjvlyzak"
              method="POST"
               className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" nme="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
               <label htmlFor="message">Message</label>
               <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">Sumbit</button>
            </form>
          </article>
        </section>
         <section className="featured-recipes">
      <h5>Take a look at our Featured Recipes for the week</h5>
      <RecipesList recipes={recipes} />
    </section>
      </main>
  </div>
 
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

export default Contact;

