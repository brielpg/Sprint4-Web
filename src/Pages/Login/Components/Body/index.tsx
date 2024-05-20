import "./style.css";
import axios from 'axios';
import { useState } from 'react'
import Header25 from "../Header";
import imagemProdutoSalesforce from "../../../../assets/php-login-free-trial-fg-2.png"

const Login = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [psw, setPsw] = useState("")

    const req = async ()=> {
        try{
          const response = await axios({
            method: "post",
            url: "http://localhost:8080/challenge/login",
            headers: {"Content-Type": "application/json"},
            data: {
              "nome": nome,
              "email_usuario": email,
              "senha": psw,
            }
          })
          console.log(response)
        }catch(err){
          console.log(err)
        }
      }

    return(
        <main>    
        <Header25 />
        <div id="login-page">
            <div id="formulario-login">
                <div id="respostas-login">
                    <div className="inputs-login">
                        <p>Nome</p>
                        <input onChange={(e) => setNome(e.target.value)} type="text" name="nome" required />
                    </div>
                    <div className="inputs-login">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" required />
                    </div>
                    <div className="inputs-login">
                        <p>Senha</p>
                        <input onChange={(e) => setPsw(e.target.value)} type="password" name="senha" required />
                    </div>
                    <input id="btn4" onClick={req} type="submit" value="Entrar"/>
                    <div className="checkbox_option">
                          <input type="checkbox"></input>
                          <label>Lembrar de mim</label>
                    </div>
                </div>
            </div>
            <img src={imagemProdutoSalesforce} alt="Imagem produto salesforce" />
        </div>
    </main>
    )
}

export default Login;