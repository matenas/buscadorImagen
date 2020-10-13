import React from 'react';

const Image = ({images}) => {

    const { largeImageURL, tags,likes,previewURL,views } = images;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
            <div className="card">
                <img src={largeImageURL} alt={tags} className="card-img-top" />
                <div className="card-footer">
                    <small className="text-muted d-block"><span>Likes: {likes} ❤</span></small>
                    <small className="text-muted"><span>Views: {likes} 👁</span></small>
                </div>
            </div>
        </div>
    );
};

export default Image;