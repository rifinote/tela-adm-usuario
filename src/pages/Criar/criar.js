import "./criar.css";

function Criar() {
  return (
    <div>
      <h1 class="title_form1">Crie agora sua CoTrip!</h1>
      <h3 id="subtitle_form1">Vamos te ajudar a preparar sua campanha!</h3>
      <div class="card_form1">
        <form id="form1" name="userForm" action="./form2.html" method="GET">
          <input type="hidden" id="origin" name="origin" value="" />
          <input type="hidden" id="destination" name="destination" value="" />
          <input type="hidden" id="moneyGoal" name="moneyGoal" value="" />

          <label for="campaign" class="input-title2" required>
            Quero iniciar uma campanha chamada:{" "}
          </label>
          <input
            type="text"
            id="campaign"
            name="campaign"
            placeholder="Esse será o título da sua campanha..."
          />

          <label for="userEmail" class="input-title2" required>
            E mail
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="seuemail@email.com"
          />

          <label for="userPsw" class="input-title2" required>
            Senha
          </label>
          <input
            type="password"
            id="userPsw"
            name="userPsw"
            placeholder="Sua senha deve conter entre 8 e 10 caracteres entre letras e números."
          />
          <input
            type="checkbox"
            name="manterlogado"
            id="manterlogado"
            value=""
          />
          <label for="manterlogado" class="input-title2">
            Aceito os{" "}
            <a class="link" href="#">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a class="link" href="#">
              Política de Privacidade
            </a>
          </label>

          <p>
            <button
              type="button"
              value="Continuar"
              id="form-button"
              class="form-button"
            >
              {" "}
              Criar
            </button>
            <h3 class="asking">
              Ainda não tem uma Cotrip?{" "}
              <a class="link" href="#crie">
                Crie
              </a>
            </h3>
          </p>
          
        </form>
      </div>
    </div>
  );
}
export default Criar;