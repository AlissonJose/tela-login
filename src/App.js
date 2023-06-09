import { useState } from "react"
import wobbuffet from "../src/assets/foto-01.gif"
import "./styles.css"

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo a Pokédex!</span>

            <span className="login-form-title">
              <img src={wobbuffet} alt="" Pokemon Wobbuffet />
            </span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? 'has-val inpu' : 'input'}
              // Aqui utilizado hífen ternário para condição do input ao inserir ou não informações no campo !== " " verdadeiro
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? 'has-val inpu' : 'input'} 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a className="txt2" href="#"> Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
