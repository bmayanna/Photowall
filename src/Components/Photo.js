import React from "react"


function Photo(props)
{
        const post = props.post
        return (
            <figure className="figure">
                <img className="single-photo" src={post.imageLink} alt={post.description}/>
                <figcaption > 
                    <p>
                        {post.description}
                    </p>
                    <div className="button-container" onClick={() => {props.onRemovePhoto(post)} }>
                        <button className="remove-button">
                            Remove
                        </button>
                    </div>
                </figcaption>
            </figure> 
        )

    
}


export default Photo