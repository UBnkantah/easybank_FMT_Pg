import React from 'react'
import { art } from '../ArticleDB/ArticleDB'
import "./Article.css"


const Article = () => {
  return (
    <div className='article'>
      <h1>Latest Article</h1>
      <div className="art-container">
        {art.map((items) => {
            return(
                <div className="art-details" key={items.id}>
                    <img src={items.image} alt="" />
                    <div className='item'>
                        <p className='title'>By Claire Robinson</p>
                        <h3>Receive money in any currency with no fees</h3>
                        <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </div>
                </div>
            )
            
        })}
        
      </div>
    </div>
  )
}

export default Article
