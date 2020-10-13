import React from 'react';
import Image from './Image';

const ListImg = ({images}) => {
    return (
        <div className="col-12 p-5 row">
            { images.map( item => (
                <Image key={item.id} images={item} />
            ))}    
        </div>
    );
};

export default ListImg;