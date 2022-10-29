import Navbar from '../../components/menu/Navbar';
import { useContext, useEffect, useState } from 'react'
import "./styles.css";
import {  Projeto} from '../../types/Types'
import { useNavigate, useParams } from 'react-router-dom';

export const Editar_Projeto = () =>{

    const { id } = useParams()


    const [projeto, setProjeto] = useState<Projeto>()
    const [projetoInicial, setProjetoInicial] = useState<Projeto>()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER}/getProjeto/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProjeto(data)
            setProjetoInicial(data)
          })
      }, [])


    function handleChange(e: any) {
        setProjeto({...projeto, [e.target.name]: e.target.value})
    }

    function handleSelect(e: any) {
        setProjeto({...projeto, [e.target.name]: e.target.options[e.target.selectedIndex].value,})
    }

    // Função para ativar inputs
    const[isDisabled, setIsDisabled] = useState(true);
    //Esconde botao alterar
    const[isHidden, setIsHidden] = useState(false);
   //Div dos botoes de concluir e cancelar
    const[isVisible, setIsVisible] = useState(true);
    const editarUsuario = () => {
        setIsDisabled(!isDisabled)
        setIsHidden(!isHidden)
        setIsVisible(!isVisible)
    }


    const cancelar = () => {
        setProjeto(projetoInicial)
        editarUsuario()
    }

    const salvarProjeto = () => {
        fetch(`${process.env.REACT_APP_SERVER}/atualizarProjeto/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(projeto),
          })
            .then((resp) => resp.json())
            .then((data) => {
              console.log(data)
              setProjetoInicial(projeto)
              editarUsuario()
            })
            .catch((err) => console.log(err))
    }

return(
<body >
     <Navbar/>
     <div className="edit">
             <h3>Cadastro Projetos</h3>
              <div className="row g-2">
                 <div className="col-md">
                     <div className="form-floating">
                     <input type="text" className="form-control matricula" id="floatingInputGrid matricula" name='matricula' disabled value={projeto?.id}   />
                     <label htmlFor="floatingInputGrid">ID</label>
                     </div>
               </div>           
            </div> 
            <div className="row g-2">


             <div className="col-md">
                     <div className="form-floating">
                         <input type="tel" className="form-control" id="floatingInputGrid" onChange={handleChange} disabled={isDisabled}value={projeto?.nome} name='telefone'/>
                         <label htmlFor="floatingInputGrid">Nome</label>
                     </div>
                 </div>

                 <div className="col-md">
                     <div className="form-floating">
                         <select  className="form-select" id="floatingInputGrid" onChange={handleSelect}disabled={isDisabled} value={projeto?.cliente} name="modalidade">
                         <option value="hora extra">1</option>
                         <option value="sobreaviso">2</option>
                         </select>
                         <label htmlFor="floatingInputGrid">Cliente</label>
                     </div>
                 </div>  

                

             </div>
             {/* Turno && Email */}
             <div className="row g-2">
                 <div className="col-md">
                     <div className="form-floating">
                         <select  className="form-select" id="floatingInputGrid" onChange={handleSelect}disabled={isDisabled} value={projeto?.cr} name="modalidade">
                         <option value="hora extra">1</option>
                        <option value="sobreaviso">2</option>
                         </select>
                         <label htmlFor="floatingInputGrid">CR</label>
                     </div>
                 </div>  
                    
                
                 <div className="col-md">                        
             <div className="form-floating">
                         <select className="form-select" aria-label="Disabled select example" disabled={isDisabled} onChange={handleSelect} value={projeto?.status} name="acionado" >
                         <option value="nao">Ativo</option>
                         <option value="sim">Inativo</option>
                         </select>
                         <label htmlFor="floatingInputGrid">Status</label>
                     </div>
                 </div>
             </div>

           
                 <hr className='linha'/>
                 {/* Botão Cadastrar */}
                 {/* <button onClick={editarUsuario}  className='btn btn-primary editar' hidden={isHidden}>Editar</button> */}
                 <button onClick={editarUsuario}  className='btn btn-primary editar' hidden={isHidden}>Editar</button>
                    <div className='alteracao' hidden={isVisible}>
                        <button className='btn btn-danger' onClick={cancelar}>Cancelar</button>
                        <button onClick={salvarProjeto} className='btn btn-success'>Concluir</button>
                    </div>
         </div>
 </body>
)
}
export default Editar_Projeto