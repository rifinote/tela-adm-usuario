import "../Criar/criar.css";
import imgagemEscolhida from "./logo.png";
function Destino() {
  return (
    <div>
      <img class= "img1"src={imgagemEscolhida} />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">Como Funciona</a>
        </li>
        <li>
          <a href="#contact">CoTrips</a>
        </li>
        <li>
          <a href="#about">Quem já viajou</a>
        </li>
        <button class="secundary-button">Entrar</button>
        <button class="secundary-button">Criar</button>
      </ul>

      <div class="card_form0">
        <h1 id="box-title">COMECE AGORA!</h1>
        <form id="form0" name="userForm" action="./form1.html" method="GET">
          <label for="origin" class="input-title2" required>
            Origem
          </label>
          <input
            type="text"
            id="origin"
            name="origin"
            placeholder="Exemplo: Recife, São Paulo"
          />

          <label for="destination" class="input-title2" required>
            Destino Principal{" "}
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Exemplo: Orlando, Flórida"
          />

          <label for="guests" class="input-title2">
            Número de Pessoas
          </label>
          <select id="guests" name="propertyType" class="input-field2">
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5+</option>
          </select>

          <label for="checkInDate" class="input-title2">
            Data de ida{" "}
          </label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            class="input-field"
          />

          <label for="checkOutDate" class="input-title2">
            Data de retorno{" "}
          </label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            class="input-field"
          />

          <label for="moneyGoal" class="input-title2" required>
            Valor que deseja arrecadar{" "}
          </label>
          <input
            type="text"
            id="moneyGoal"
            name="moneyGoal"
            placeholder="Exemplo: 5000"
          />

          <p>
            <button
              type="button"
              value="Continuar"
              id="form-button"
              class="form-button"
            >
              {" "}
              Continuar
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Destino;