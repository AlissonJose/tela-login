import wobbuffet from "../public/assets/foto-01.gif";

function App() {
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
              <input type="email" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
