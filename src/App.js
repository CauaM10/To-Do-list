import { useEffect, useState } from "react";

function App() {


  const [ listatarefas, setListaTarefas] = useState ([]);
  const [ tarefa, setTarefa] = useState ( { id: '', texto:""} );

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

  return (
      <>
      <hearder>
          <h1>React DO</h1>
      </hearder>
        <div>
          <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value})}/>
          <button onClick={addTarefa}>Adicionar</button>
        </div>
        <div>
            <ul>
              {listatarefas.map((item, index) => (
                <li key={item.id}>{item.texto} <button onClick={ () => ExcluirTarefa(item.id)}>Excluir</button></li>
            ))}
            </ul>
        </div>
      </>
  );
}

export default App;
