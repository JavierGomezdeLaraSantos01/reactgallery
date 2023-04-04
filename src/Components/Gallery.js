import React from "react";
import Image from "./Image";
import NoImages from "./NoImages";

const Gallery = (props) => {
    const results = props.data;
    let images;
    let NoImages;

    if(results.length > 0){
        images = results.map(image =>{
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let title = image.title;
            let url =`https://farm${farm}.staticflikr.com/${server}/${id}_${secret}_m.jpg`;
            return <Image url={url} key={id} alt={title}></Image>
        });
    }else{
        NoImages = <NoImages></NoImages>;
    }
    return (
        <div>
            <ul>
                {images}
            </ul>
            {NoImages}
        </div>
    )
};
export default Gallery;