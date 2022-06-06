import "./usuario.css";
import user from "../../components/Img/Usuario/user.png";
import banner from "../../components/Img/Usuario/banner.png";
import configuracao from "../../components/Img/Usuario/configuracao.png";
import edicao from "../../components/Img/Usuario/edicao.png";
import pino from "../../components/Img/Usuario/pino.png";
import logo from "../../components/Img/Usuario/logo.png";
import linha from "../../components/Img/Usuario/linha.png";
import aviao from "../../components/Img/Usuario/aviao.png";
import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";

const Usuario= () => {


  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [money, setMoney] = useState("");
  const [campaign, setCampaign] = useState("");
  const [message, setMessage] = useState("");
  const [moneyGoal, setMoneyGoal] = useState("");
  const [limit_date, setLimitDate] = useState("");

  const navigate = useNavigate();

  const handleUsuario =  () => {
    if ( !origin | !money | !campaign | !destination | !message | !moneyGoal | !limit_date );
  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const originQueryStringParameterValue = urlParams.get('origin');
    const destinationQueryStringParameterValue = urlParams.get('destination');
    const moneyGoalQueryStringParameterValue = urlParams.get('moneyGoal');
    const campaignQueryStringParameterValue = urlParams.get('campaign');
    const messageQueryStringParameterValue = urlParams.get('message');
    const limit_dateQueryStringParameterValue = urlParams.get('limit_date');
  
    var limitDate = new Date(limit_dateQueryStringParameterValue);
  
    var options = {
      year: "numeric",
      month: "long"
  };
  
    campaign.innerHTML = campaignQueryStringParameterValue;
    origin.innerHTML = originQueryStringParameterValue;
    destination.innerHTML = destinationQueryStringParameterValue;
    message.innerHTML = messageQueryStringParameterValue;
    moneyGoal.innerHTML = "R$ " + moneyGoalQueryStringParameterValue;
    limit_date.innerHTML = limitDate.toLocaleString("pt-BR", options);
};

  return (
    <div>
      <div id="menu">
        <ul className="container">
          <img id="logo" src={logo} />
          <div id="menuOptions">
            
              <img src={configuracao} id="admLogo" />
            <Link className="menuText admText" to="/Adm"><label className="menu-style">Painel Administrativo</label></Link>  
            
            <a className="menuText editModeText">
              <img src={edicao} id="editModeLogo" />
              <label className="menu-style">Ativar modo edição do perfil</label>
            </a>
          </div>
        </ul>
      </div>
      <div>
        <img src={banner} id="fundo" />
        <img src={user} id="perfil" />
      </div>
      <h2 id="mainText">Viagem para a Disney - Juliana Araújo</h2>
      <div>
        <img src={pino} className="localization before" />
        <p id="origin" className="city before">
          Recife
        </p>
        <img src={linha} id="retangulo" />
        <img src={aviao} id="aviao" />
        <p id="destination" className="city after">
          Orlando
        </p>
        <img src={pino} className="localization after" />
      </div>
      <div className="container">
        <button id="sobreTxt">Sobre</button>
        <div id="sobreFrame"></div>
        <h1 id="sobreTitulo">Me ajude a realizar esse sonho!</h1>
        <p id="sobreParagrafo">
          Ir para a Disney sempre foi um grande desejo! Sonho com esse dia desde
          pequena. No próximo ano completo 15 anos e seria surreal poder
          comemorar meu aniversário lá! Meus pais estão me ajudando mas não têm
          condições de bancarem essa viagem inteira sozinhos. Quem puder me
          ajudar vai me deixar muitoooo feliz, e vai estar participando
          diretamente do meu grande sonho. Podem contribuir quantas vezes
          quiserem! Conto com vocês! !
        </p>
        <button className="option first">Diário de bordo</button>
        <button className="option second">Apoiadores</button>
        <button className="option third">Mensagens</button>
      </div>
      <div id="sidebar"></div>
      <div id="bluebox"></div>
      <div id="bluebar"></div>
      <h2 id="bluetext">Total arrecadado</h2>
      <h3 id="blueprice">R$:0</h3>
      <div id="greenbox"></div>
      <div id="greenbar"></div>
      <h2 id="greentext">Meta</h2>
      <h3 id="greenprice">R$:9.500</h3>
      <p class="frase">0 apoiadores até o momento </p> <br></br>
      <p id="frase">
        Arrecadação até <b id="limit_date">julho de 2022</b>
      </p>
    </div>
  );
}

export default Usuario;