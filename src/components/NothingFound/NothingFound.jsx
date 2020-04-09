import React from 'react'
import sadDog from '../../assets/sad-dog.png'

const NothingFound = () => {
    return (
        <div className="row">
            <div className="col-sm-10 mx-auto">
                <h1>Aw man!</h1>
                <img src={sadDog} aria-hidden="true" />
                <h4>
                    There's nothing in our database that matches this
                    description.
                </h4>
                <small>
                    IMAGE CREDIT:{' '}
                    <a href="httgtps://www.vecteezy.com/free-vector/sad-puppy">
                        Sad Puppy Vectors by Vecteezy
                    </a>
                </small>
            </div>
        </div>
    )
}

export default NothingFound
