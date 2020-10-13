import React, { useState,useEffect } from 'react';
import Form from './components/Form';
import ListImg from './components/ListImg';

function App() {

  //state app buscador
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);


  useEffect( () => {
    //evito que hago una busqueda al principio 
    if(search === '') return;

    const imgPerPage = 30;
    const apiKey = '18677764-9ae7709334f6226c692b5e215';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${imgPerPage}&page=${currentPage}`;

    const searchApi = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);  
      setImages(data.hits);  

      //calcular total paginas
      const calcTotalPages = Math.ceil(data.totalHits / imgPerPage);
      setTotalPage(calcTotalPages);
      
      //mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({
        behavior: "smooth"
      })
    };
    searchApi();

  },[search,currentPage] );

  //cuando presiono anterior
  const clickPrev = () => {
    const newCurrentPage = currentPage -1;
    if(newCurrentPage === 0) {
      return;
    }
    setCurrentPage(newCurrentPage);
  }
  const clickNext = () => {
    const newCurrentPage = currentPage + 1;
    if(newCurrentPage > totalPage) {
      return;
    }
    setCurrentPage(newCurrentPage);

  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="lead text-center">Buscador de Imagenes</h1>
        <Form
          setSearch={setSearch}  
        />
      </div>
      <div className="row justify-content-center">
        <ListImg
          images={images}
        />
      </div>
      <div className="row justify-content-center">
        {(currentPage === 1)? null :
        <button className="btn btn-info mr-1"
          onClick={clickPrev}
        >
          👈
        </button>}
        {(currentPage === totalPage) ? null :
        <button className="btn btn-info mr-1"
          onClick={clickNext}
        >
          👉
        </button> }
      </div>
    </div>
  );
}

export default App;
