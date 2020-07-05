import React from 'react';

class SWForm extends React.Component {
    
    constructor(props)
    {
        super(props);
    }

    consultarAPI = () =>
    {
        var combo = document.getElementById('cbCategoria');
        var texto = combo.options[combo.selectedIndex].text.toLowerCase();
        fetch('https://swapi.dev/api/' + texto + '/' + document.getElementById("txtNumero").value + '/')       
        .then(resposta => resposta.json())
        .then(function(data)
        {                        
            document.getElementById("result").innerHTML = "Resultado:\t" + data[Object.keys(data)[0].toLowerCase()];
        })
    }

     render(){    
        return (
            <div className="container mt-5" id="center_section">
                <div className="row justify-text-center display-flex align-items-center">                     
                    <div className="col-lg-5" id="left_panel">
                        <h2>Consulta StarWars</h2>
                        <p className="text-muted">Complete o formulário abaixo para realizar sua consulta!</p>
                        <hr></hr>
                        <form>
                        <div className="form-group">             
                            <label htmlFor="cbCategoria">Selecione uma das opções</label>               
                            <select className="form-control" id="cbCategoria">
                                <option value="1">People</option>
                                <option value="2">Films</option>
                                <option value="3">Starships</option>
                                <option value="4">vehicles</option>
                                <option value="5">Species</option>
                                <option value="6">Planets</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">insira um número</label>
                            <input type="number" className="form-control" id="txtNumero" aria-describedby="emailHelp"></input>
                            <small id="emailHelp" className="form-text text-muted">número inserido deve ser maior que zero.</small>
                        </div>        
                        <button type="button" className="btn btn-primary btn-block" id="btnConsultarApi" onClick={this.consultarAPI}>Consultar</button>
                    </form>
                    <div className="mt-2" id="result">
                        
                    </div>
                </div>
                <div className="col-lg-7 d-flex justify-content-center" id="right_panel">
                    <img src="/vader.png" width="700" height="700" className="d-inline-block mr-4" alt=""></img>
                </div>
                </div>
            </div>    
        );
    }
}

export default SWForm;