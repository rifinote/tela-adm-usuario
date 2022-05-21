import "./usuario.css";

function Usuario () {
    return (
        <div>
<div id="menu">
        <img src="img/Captura de Tela (77) 2.png" id="logo"/>
        <div id="menuOptions">
            <a class="menuText admText">
                <img src="img/configuracao-da-roda-dentada 1.png" id="admLogo"/>
                <label class="menu-style">Painel Administrativo</label>
            </a>
            <a class="menuText editModeText">
                    <img src="img/edicao 1.png" id="editModeLogo"/>
                    <label class="menu-style">Ativar modo edição do perfil</label>
            </a>
        </div>
    </div>
    <div>
        <img src="img/banner.png" id="fundo"/>
        <img src="img/76.png" id="perfil"/>
    </div>
    <h2 id="mainText">Viagem para a Disney -  Juliana Araújo</h2>
    <div>
        <img src="img/pino-de-localizacao 1.png" class="localization before"/>
        <p id="origin" class="city before">Recife</p>
        <img src="img/Rectangle 149.png" id="retangulo"/>
        <img src="img/modo-aviao 1.png" id="aviao"/>
        <p id="destination" class="city after">Orlando</p>
        <img src="img/pino-de-localizacao 1.png" class="localization after"/>
    </div>
    <div class="container">
       
        <button id="sobreTxt">Sobre</button>
        <div id="sobreFrame"></div>
        <h1 id="sobreTitulo">Me ajude a realizar esse sonho!</h1>
        <p id="sobreParagrafo">Ir para a Disney sempre foi um grande desejo! Sonho com esse dia desde
            pequena. No próximo ano completo 15 anos e seria surreal poder comemorar
            meu aniversário lá! Meus pais estão me ajudando mas não têm condições
            de bancarem essa viagem inteira sozinhos. 
            Quem puder me ajudar vai me deixar muitoooo feliz, e vai estar participando
            diretamente do meu grande sonho. Podem contribuir quantas vezes quiserem! 
            Conto com vocês! !
        </p>
        <button class="option first">Diário de bordo</button>
        <button class="option second">Apoiadores</button>
        <button class="option third">Mensagens</button>
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
    <p id="frase">Arrecadação até <b id="limit_date">julho de 2022</b></p>
    </div>
    );
  }
  
  export default Usuario;