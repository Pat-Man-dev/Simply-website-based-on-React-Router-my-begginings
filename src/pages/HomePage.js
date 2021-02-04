import React from 'react';
import Article from '../components/Article';
import '../styles/HomePage.css'

const articles = [{
    id: 1,
    title: 'Dokąd nocą tupta jeż?',
    author: 'Jan Nowak',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea ut ratione eaque reprehenderit sit excepturi sequi tenetur, reiciendis, cumque dolore non magnam perferendis quis ullam voluptates quod corrupti quasi!'
},
{
    id: 2,
    title: 'Gdzie jest księżyc gdy go nie ma?',
    author: 'Kasia Kruk',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea ut ratione eaque reprehenderit sit excepturi sequi tenetur, reiciendis, cumque dolore non magnam perferendis quis ullam voluptates quod corrupti quasi!'
},
{
    id: 3,
    title: 'Teoria wielkiego wybuchu!',
    author: 'Zdzisław Kowalski',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea ut ratione eaque reprehenderit sit excepturi sequi tenetur, reiciendis, cumque dolore non magnam perferendis quis ullam voluptates quod corrupti quasi!'
}];

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="home">
            {artList}
        </div>
    );
};

export default HomePage;