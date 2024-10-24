import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  background-position: center;
  height: 100vh;
  text-align: center;
  font-family: "sevillana";
  
  }

  h1{
    font-weigth: 400;
   font-size: 25px;
    color:white;
  }

button{
  font-family: "sevillana";
  font-size: 25px;
  background-color:#007BFF;
  color: white;
  border-radius: 50px;
  width: 400px;
  height: 71px;
}

@media(min-width:201px) and (max-width:500px){
  body{
    font-weight:400px;
    font-size:15px;
  }
  h1{
    font-weight:400px;
    font-size:20px;
    color:white;
  }
  
img{
  width:600px
}

  button{
    background-color: #B74794;
    width:200px;
    height:65px;
    font-size:22px
  }
}


`;

const Titulo = styled.h2`
  color: white;
`;

const Aviso = styled.h3`
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

function LampadaMagica() {
  const [lampada, setLampada] = useState(false);

  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <GlobalStyle />
      <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>
      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
      />
      <div>
        <button
          onClick={() => {
            setLampada(!lampada);
          }}
        >
          Clique aqui
        </button>
      </div>
    </main>
  );
}

export default LampadaMagica;
