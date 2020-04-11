import React from 'react'
import sadDog from '../../assets/sad-dog.png'

const NothingFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <h1>Aw man!</h1>
                    <p>
                        There's nothing in our database that matches this
                        description.
                    </p>
                </div>
                <div className="col-sm-4">
                    <a href="httgtps://www.vecteezy.com/free-vector/sad-puppy">
                        <img src={sadDog} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NothingFound
