import "./cadastro.css"
import logo from "./logo.png";
function Cadastro(){
    return (
      <main>
        <img class="img1" src={logo} />
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
        <div>
          <h1 class="principal-title">Complete seu Cadastro</h1>
          <h3 id="subtitle">Queremos saber mais sobre você!</h3>
        </div>
        <form id="form2" action="./usuario/index.html" class="section_form">
          <input type="hidden" id="origin" name="origin" value="" />
          <input type="hidden" id="destination" name="destination" value="" />
          <input type="hidden" id="moneyGoal" name="moneyGoal" value="" />
          <input type="hidden" id="campaign" name="campaign" value="" />
          <fieldset>
            <legend>Dados Pessoais</legend>
            <label for="completeName" class="input-title">
              Nome Completo
            </label>
            <input
              type="text"
              id="completeName"
              name="completeName"
              class="input-field"
            />

            <label for="cpf" class="input-title">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              class="input-field"
              placeholder="Digite apenas números"
            />

            <label for="birthday" class="input-title">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              class="input-field"
            />

            <label for="state" class="input-title">
              Estado
            </label>
            <select id="state" name="country" class="input-field">
              <option value="acre">AC</option>
              <option value="alagoas">AL</option>
              <option value="amapa">AP</option>
              <option value="amazonas">AM</option>
              <option value="bahia">BA</option>
              <option value="ceara">CE</option>
              <option value="espiritoSanto">ES</option>
              <option value="goias">GO</option>
              <option value="maranhao">MA</option>
              <option value="matoGrosso">MT</option>
              <option value="matoGrossoSul">MS</option>
              <option value="minasGerais">MG</option>
              <option value="para">PA</option>
              <option value="paraiba">PB</option>
              <option value="parana">PR</option>
              <option value="pernambuco">PE</option>
              <option value="piaui">PI</option>
              <option value="rioDeJaneiro">RJ</option>
              <option value="rioGrandeNorte">RN</option>
              <option value="rioGrandeSul">RS</option>
              <option value="rondondia">RO</option>
              <option value="roraima">RR</option>
              <option value="santaCatarina">SC</option>
              <option value="saoPaulo">SP</option>
              <option value="sergipe">SE</option>
              <option value="tocantins">TO</option>
              <option value="distritoFederal">DF</option>
            </select>

            <label for="city" class="input-title">
              Cidade
            </label>
            <input type="text" id="city" name="city" class="input-field" />
          </fieldset>

          <fieldset>
            <legend>Dados da CoTrip</legend>
            <p id="note">
              *Não se preucupe. Você pode alterar essas opções depois!
            </p>
            <label for="cover_img" class="input-title">
              Escolha uma foto para a capa da sua campanha
            </label>
            <input
              type="file"
              id="cover_img"
              name="cover_img"
              class="input-field"
            />

            <label for="profile_img" class="input-title">
              Escolha uma foto para seu perfil
            </label>
            <input
              type="file"
              id="profile_img"
              name="profile_img"
              class="input-field"
            />

            <label for="limit_date" class="input-title">
              Defina a data de encerramento da sua campanha
            </label>
            <input
              type="date"
              id="limit_date"
              name="limit_date"
              class="input-field"
            />

            <label for="mensagem" class="input-title">
              Hora de falar sobre sua CoTrip. Capricha!{" "}
            </label>
            <textarea
              id="mensagem"
              name="message"
              class="input-field"
              cols="70"
              rows="10"
            ></textarea>

            <label for="destinyOption" class="input-title">
              Você aceitaria outras opções de destino?
            </label>
            <select id="destinyOption" name="destinyOption" class="input-field">
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>

            <label for="datesOption" class="input-title">
              Você considera datas alternativas para a viagem?
            </label>
            <select id="datesOption" name="datesOption" class="input-field">
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>

            <label for="propertyType" class="input-title">
              Qual tipo de hospedagem você deseja?
            </label>
            <select id="propertyType" name="propertyType" class="input-field">
              <option value="hotel">Hotel</option>
              <option value="pousada">Pousada</option>
              <option value="flat">Flat</option>
              <option value="apartamento">Apartamento</option>
              <option value="albergue">Albergue</option>
              <option value="casaTemporada">Casa de temporada</option>
            </select>
          </fieldset>
          <input
            type="button"
            value="Publicar minha CoTrip!"
            id="form-button"
            class="form-button"
            onmouseup="mouseUp()"
            onmousedown="mouseDown()"
            onclick="publish()"
          />
        </form>
      </main>
    );
}
export default Cadastro;