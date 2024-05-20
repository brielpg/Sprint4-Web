import "./formulario.css";
import Header2 from '../Header/index.tsx'
import Footer from '../Footer/index.tsx'
import { useState } from 'react'
import axios from 'axios'


const Formulario = () => {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [cargo, setCargo] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [pais, setPais] = useState("")
    const [idioma, setIdioma] = useState("")
    const [cpf, setCpf] = useState("")
    const [nfuncionarios, setNfuncionarios] = useState("")
    const [senha, setSenha] = useState("")

    // const req = async () => {
    //   axios.post("http://localhost:8080/challenge/cadastro", 
    //   {
    //       "nome": nome,
    //       "sobrenome" : sobrenome,
    //       "telefone" : telefone,
    //       "email_usuario" : email,
    //       "cargo" : cargo,
    //       "empresa" : empresa,
    //       "pais" : pais,
    //       "idioma" : idioma,
    //       "cpf_usuario" : cpf,
    //       "nr_funcionarios" : nfuncionarios,
    //       "senha" : senha
    //     }
    // )
    // }
    
    const req = async ()=> {
    try{
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/challenge",
        headers: {"Content-Type": "application/json"},
        data: {
          "nome": nome,
          "sobrenome" : sobrenome,
          "telefone" : telefone,
          "email_usuario" : email,
          "cargo" : cargo,
          "empresa" : empresa,
          "pais" : pais,
          "idioma" : idioma,
          "cpf_usuario" : cpf,
          "nr_funcionarios" : nfuncionarios,
          "senha" : senha
        }
      })
      console.log(response);
    }catch(err){
      console.log(err)
      
    }
  }

    return(
        <main>
        <Header2/>
        <form className="formulario__container">
            <div className="perguntas__formulario">
                <div id="caixa__perguntas">
                    <p>Por favor, preencha todos os campos</p>
                    <div id="form">
                            <div id="dois">
                                <input onChange={(e) => setNome(e.target.value)} type="text" name="nome" placeholder="Nome" required />
                                <input onChange={(e) => setSobrenome(e.target.value)} type="text" name="sobrenome" placeholder="Sobrenome" required />
                            </div>
                            
                            <div id="dois">
                                <input onChange={(e) => setCargo(e.target.value)} type="text" name="cargo" placeholder="Cargo" required />
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
                            </div>
                            

                            <div id="dois">
                                <input onChange={(e) => setTelefone(e.target.value)} type="text" name="telefone" placeholder="Telefone" required />
                                <input onChange={(e) => setEmpresa(e.target.value)} type="text" name="empresa" placeholder="Empresa" required />
                            </div>

                            <div id="dois">
                                <input onChange={(e) => setNfuncionarios(e.target.value)} type="number" name="nfuncionarios" placeholder="Número de funcionários" required />
                                <input onChange={(e) => setPais(e.target.value)} type="text" name="pais" placeholder="País" required />
                            </div>

                            <div id="dois">
                                <input onChange={(e) => setIdioma(e.target.value)} type="text" name="idioma" placeholder="Idioma" required />
                                <input onChange={(e) => setCpf(e.target.value)} type="text" name="cpf" placeholder="CPF" required />
                            </div>

                            <input onChange={(e) => setSenha(e.target.value)} type="password" name="senha" placeholder="Senha" required />
                            <input id="btn2" onClick={req} type="button" value="Enviar"/>
                        </div>
                </div>
            </div>
        </form>
        <Footer/>
        </main>
    )
}

export default Formulario;