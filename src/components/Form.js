import React, {useState} from 'react';
import Error from './Error';

const Form = ({setSearch}) => {

    const [category, setCategory] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //valido
        if(category.trim() === '') {
            setError(true);
            return
        }
        setError(false);
        //paso los datos al state principal
        setSearch(category);

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {(error)? <Error /> : null  }
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen"
                        onChange={ (e) => (setCategory(e.target.value)) }
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
        </form>
    );
};

export default Form;