import { useEffect, useState } from "react";

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
          <h1>React DO</h1>
      </hearder>
        <div>
          <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value, status: false})}/>
          <button onClick={addTarefa}>Adicionar</button>
        </div>
        <div>
            <ul>
              {listatarefas.map((item, index) => (
                <li key={item.id}>{item.texto} <button onClick={ () => StatusTarefa(item.id, item.status)}>{item.status ?'Yes':'No'}</button> <button onClick={ () => ExcluirTarefa(item.id)}>Excluir</button></li>
            ))}
            </ul>
        </div>
      </>
  );
}

export default App;
