import React from 'react'

const NothingFound = () => {
    return (
        <div className="row">
            <div className="col-sm-10 mx-auto">
                <h1>Aw man!</h1>
                <img
                    src={`${process.env.PUBLIC_URL}/images/sad-dog.png`}
                    aria-hidden="true"
                />
                <h4>
                    There's nothing in our database that matches this
                    description.
                </h4>
                <small>
                    IMAGE CREDIT:{' '}
                    <a href="https://www.vecteezy.com/free-vector/sad-puppy">
                        Sad Puppy Vectors by Vecteezy
                    </a>
                </small>
            </div>
        </div>
    )
}

export default NothingFound
