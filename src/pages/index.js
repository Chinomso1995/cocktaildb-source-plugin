import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
const Home = ({ data }) => {

  console.log(data)
  return (
    <div
      style={{
        padding: "32px",
        paddingTop: "80px",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <h1>Drinks</h1>
      <section
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat( auto-fit, minmax(250px, 1fr) )`,
          gridGap: 16,
        }}
      >
        {data?.allPost?.edges?.map((post, index) => {
          return (
            <div
              key={post?.node?.idDrink}
              style={{
                display: `flex`,
                flexDirection: `column`,
                padding: 16,
                border: `1px solid #ccc`,
              }}
            >
              <h2>{post?.node?.idDrink}</h2>
              <GatsbyImage
                image={
                  post?.node?.featuredImg?.childImageSharp?.gatsbyImageData
                }
                alt={post?.node?.strDrink}
              />
              <span style={{ textAlign: "center", marginTop: "20px" }}>
                {post?.node?.strDrink}
              </span>
              <div 
              style={{ textAlign: "center", marginTop: "20px" }}
              dangerouslySetInnerHTML={{__html: `${post?.node?.furtherInformationExcerpt}`}}
              />
                
             
              <ul>
                {
                post?.node?.relatedDrinks[index > 35 ? 0 : index]?.map((item)=> (
                  
                  <li>
                    {item?.strDrink}
                  </li>
                ))}

              </ul>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Home

export const query = graphql`
  {
    allPost {
      edges {
        node {
          featuredImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          idDrink
          strDrink
          strDrinkThumb
          furtherInformationHTML {
            _
          }
          furtherInformationExcerpt
          relatedDrinks {
            idDrink
            strDrink
            strDrinkThumb
          }
        }
      }
    }
  }
`
