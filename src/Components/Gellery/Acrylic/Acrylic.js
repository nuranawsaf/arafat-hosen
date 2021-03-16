import React, { useEffect, useState } from 'react';
import './Acrylic.css';

const images = [
    { id: '1', imageName: 'acrylic1.jpg', tag: 'acrylic' },
    { id: '2', imageName: 'acrylic2.jpg', tag: 'acrylic' },
    { id: '3', imageName: 'acrylic3.JPG', tag: 'acrylic' },
    { id: '4', imageName: 'acrylic4.JPG', tag: 'acrylic' },
    { id: '5', imageName: 'acrylic5.JPG', tag: 'acrylic' },
    { id: '6', imageName: 'acrylic6.JPG', tag: 'acrylic' },
    { id: '7', imageName: 'sketches1.jpg', tag: 'sketches' },
    { id: '8', imageName: 'sketches2.jpg', tag: 'sketches' },
    { id: '9', imageName: 'sketches3.JPG', tag: 'sketches' },
    { id: '10', imageName: 'sketches4.jpg', tag: 'sketches' },
    { id: '11', imageName: 'sketches5.jpg', tag: 'sketches' },
    { id: '12', imageName: 'sketches6.jpg', tag: 'sketches' },
    { id: '13', imageName: 'digital1.JPG', tag: 'digital' },
    { id: '14', imageName: 'digital2.JPG', tag: 'digital' },
    { id: '15', imageName: 'digital3.JPG', tag: 'digital' },
    { id: '16', imageName: 'digital4.jpg', tag: 'digital' },
    { id: '17', imageName: 'digital5.jpg', tag: 'digital' },
    { id: '18', imageName: 'digital6.jpg', tag: 'digital' },
    { id: '19', imageName: 'portraits1.jpg', tag: 'portraits' },
    { id: '20', imageName: 'portraits2.jpg', tag: 'portraits' },
    { id: '21', imageName: 'portraits3.jpg', tag: 'portraits' },
    { id: '22', imageName: 'portraits4.jpg', tag: 'portraits' },
    { id: '23', imageName: 'portraits5.JPG', tag: 'portraits' },
    { id: '24', imageName: 'portraits6.jpg', tag: 'portraits' },
    { id: '25', imageName: 'other1.jpg', tag: 'other' },
    { id: '26', imageName: 'other2.jpg', tag: 'other' },
    { id: '27', imageName: 'other3.jpg', tag: 'other' },
    { id: '28', imageName: 'other4.jpg', tag: 'other' },
    { id: '29', imageName: 'other5.jpg', tag: 'other' },
    { id: '30', imageName: 'other6.jpg', tag: 'other' },
];

const Acrylic = () => {

    const [ tag, setTag ] = useState('all');
    const [ filteredImages, setFilteredImages ] = useState([]);

    useEffect( 
        () => {
                tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
    },
     [tag]
     );


    return (
        <div>
            <div className="tags">
                <TagButton name="all" handleSetTag={setTag} tagActive={tag === 'all' ? true : false}/>
                <TagButton name="acrylic" handleSetTag={setTag} tagActive={tag === 'acrylic' ? true : false}/>
                <TagButton name="sketches" handleSetTag={setTag} tagActive={tag === 'sketches' ? true : false}/>
                <TagButton name="digital" handleSetTag={setTag} tagActive={tag === 'digital' ? true : false}/>
                <TagButton name="portraits" handleSetTag={setTag} tagActive={tag === 'portraits' ? true : false}/>
                <TagButton name="other" handleSetTag={setTag} tagActive={tag === 'other' ? true : false}/>
            </div>
            <div className="container img-arana">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image-items" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
        </div>
    );
};

const TagButton = ( { name, handleSetTag, tagActive } ) => {
    return <button className={`tag ${tagActive ? 'active1' : null}`} onClick={ () => handleSetTag(name)}> {name.toUpperCase()} </button>;
}

export default Acrylic;
