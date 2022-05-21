import "./telaadm.css";
import logo from "./logo.png";

function Admin() {
    return (
        <div>
        <div id="bar">
        <div id="btn">
           <span style="font-size:25px;cursor:pointer" onclick="openNav()">&#9776; </span>
        </div>
  
        <div id="img">
           <img src="LogoCoTrip2.png" alt="logo..." width="80" height="64"/>
        </div>
     </div>
  
     <div id="mySidenav" class="sidenav">
  
  
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#" class="bi bi-briefcase"> Minha CoTrip</a>
        <a href="#" class="bi bi-star"> Recompensas</a>
        <a href="#" class="bi bi-person-badge"> Dados pessoais</a>
        <a href="#" class="bi bi-kanban"> Gerenciar Orçamentos</a>
  
  
     </div>
  
     <div id="main" class="cont-a"/>
        <div>
           <h4 id="pacote">Seu Pacote de Viagem</h4>
           <a id="editarInfo" href="#" class="bi bi-pencil-square"> Editar informações</a>
        </div>
        <div id="informativo">
           <p class="infoP">Olá viajante!
              <br/>
              Este é o painel da sua CoTrip...
           </p>
  
        </div>
        <div id="infoTrip">
  
           <i id="destiny" class="bi bi-geo-alt-fill">
              <label for="destiny">Destino:</label>
              <p class="infoDetermine" id="dest1">teste teste</p>
           </i>
  
  
           <i id="qtdPessoas" class="bi bi-person-fill">
              <label for="qtdPessoas">Quantas Pessoas:</label>
              <p class="infoDetermine">teste teste</p>
           </i>
           <i id="data" class="bi bi-calendar-fill">
              <label for="data">Data:</label>
              <p class="infoDetermine">teste teste</p>
           </i>
           <i id="meta" class="bi bi-currency-dollar">
              <label for="meta">Meta:</label>
              <p class="infoDetermine">teste teste</p>
           </i>
  
           <div id="agenteCO">
              <hr id="linhaH"/>
              <p id="ajudaPerfil">Podemos ajuda-lo a preparar o seu perfil de viagem!</p>
              <button id="btnAgente">
                 <i class="bi bi-chat"> Falar com um agente CoTrip</i>
              </button>
           </div>
        </div>
        <div id="infoCoEdit">
           <h4 id="infoComplementares">Informações complementares</h4>
           <a id="editarInfo2" href="#" class="bi bi-pencil-square"> Editar informações</a>
           <hr id="linhaH2"/>
        </div>
        <div id="perguntas">
           <div id="motivoAlt">
              <p>Motivo da viagem:</p>
              <p class="infoDetermine">teste teste</p>
              <p>Você tem datas alternativas para a viagem?</p>
              <p class="infoDetermine">teste teste</p>
           </div>
           <div id="opcoesHosp">
              <p>Você aceitaria outras opções de destino?</p>
              <p class="infoDetermine">test teste</p>
              <p>Qual perfil de hospedagem que você deseja?</p>
              <p class="infoDetermine">teste teste</p>
           </div>
        </div>
        <h4 style="font-size: 20px;" id="plan">Meu plano</h4>
        <hr id="linhaH3"/>
        <div id="boxs"/>
           <div id="box1">
              <h3 class="bi bi-currency-dollar" style="margin-top: 25px;">0 / mês</h3>
              <p>Lorem ipsum <br>dollor sit amet </br>olorum sonoe</p>
           </div>
           <div id="box2">
              <h3 class="bi bi-currency-dollar" style="margin-top: 25px;">15 / mês</h3>
              <p>Lorem ipsum <br>dollor sit amet </br>olorum sonoe</p>
  
           </div>
           <div id="box3">
              <h3 class="bi bi-currency-dollar" style="margin-top: 25px;">29 / mês</h3>
              <p>Lorem ipsum <br>dollor sit amet </br>olorum sonoe</p>
           </div>
  
        </div>>
  
     <div id="main2" class="cont-b">
        <div>
           <a id="acessarPerfil" href="#" class="bi bi-box-arrow-in-left">Acessar seu Perfil</a>
           <i id="endereco" style="font-size: 10px;"><b>Endereço: </b> www.cotrip.com.br/Viajante</i>
        </div>
        <hr id="linhaH4"/>
        <div id="progreBar">
  
           <progress id="barra" value="0" max="100"></progress>
  
        </div>
        <div id="ord">
           <div id="testeP1">
              <i class="bi bi-geo-alt-fill" id="ponto1"></i>
              <p style="font-size: 10px; margin-left: 18px;">Teste
                 <br/>
                 teste
              </p>
           </div>
           <div id="testeP2">
              <i class="bi bi-geo-alt-fill" id="ponto2"></i>
              <p style="font-size: 10px; margin-right: 28px;">Teste
                 <br/>
                 teste
              </p>
           </div>
        </div>
        <div id="infohr" style="text-align: center;">
           <div id="infohr1">
              <h5 style="font-size: 12px;">Arrecadados</h5>
              <h3>00</h3>
  
           </div>
           <hr style="width: 0.5px; height: 80px;" />
           <div id="infohr2">
              <h5 style="font-size: 11px;">Apoiadores</h5>
              <h3>00</h3>
           </div>
           <hr style=" height:80px; width:0.5px;"/>
        
           <div id="infohr3">
              <h5 style="font-size: 11px;">Visualizações</h5>
              <h3 style="margin-right: 20px;">00</h3>
           </div>
  
  
        </div>
        <div id="linksEsD">
           <a href="#">Editar meu perfil</a>
           <a href="#">Sacar valor arrecadado</a>
           <a href="#">Desativar meu perfil</a>
        </div>
        <div id="chat">
           <a href="#" class="bi bi-chat" style="color: white; font-size: 25px;position: absolute; top: 6px; left: 12px;"></a>
        </div>
        </div>
  
  
    );
  }
  
  export default Admin;