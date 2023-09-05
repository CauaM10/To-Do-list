import { useEffect, useState } from "react";
import "./App.css"

function App() {


  const [ listatarefas, setListaTarefas] = useState ([]);
  const [ tarefa, setTarefa] = useState ( { id: '', texto:"" , status: "" } );

  function addTarefa()
  {
      if(tarefa.texto !==""){
        setListaTarefas ( [...listatarefas, tarefa] );
      }
      
  }

  useEffect( () => {
    setTarefa({id: "", texto: ""});

  }, [ listatarefas ] )

  function ExcluirTarefa( id ){
    const novaLista = listatarefas.filter( (tarefa) => tarefa.id !== id );
    setListaTarefas( novaLista );
  }

  function StatusTarefa (id, status){
      const index = listatarefas.findIndex((tarefa) => tarefa.id === id);
      const NovoStatus = status;
      listatarefas[index].status = !status;
      setListaTarefas ([...listatarefas]);

  }

  return (
      <>
      <hearder>
          <h1 className="Titulo">To-Do List</h1>
      </hearder>
        <div className="Add-Escrever">
          <div className="input-Escrever"><input maxLength={30} className="Escrever" type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value, status: false})}/></div>
          
          <div className="butadd" ><button className="Addbutton" onClick={addTarefa}>Adicionar</button></div>
        </div>
        
        <div className="caixa-tarefas">
            <ul className="esppp">
              {listatarefas.map((item, index) => (
              <li className= {item.status ? 'Nfeito' : 'feito'} key={item.id}><div className="texto">{item.texto}</div> <div className="esp-butts"><button  className= {item.status ? 'but-nfeito' : 'but-feito'} onClick={ () => StatusTarefa(item.id, item.status)}>{item.status ? <i className="but-color-n" class="fa-solid fa-circle-check"></i> : <i className="check" class="fa-regular fa-circle-check"></i> }</button> <i onClick={ () => ExcluirTarefa(item.id)} class="fa-regular fa-trash-can"></i>  </div>  </li>
            ))}
            </ul>
        </div>
        <div className="ultima-caixa"></div>
      </>
  );
}

export default App;
