import React from 'react';
import Form from './Form/Form';

// const Titulo = ({cor, texto, children}) => {
//   return <h1 style={{color: cor}}>{texto}, {children}</h1>
// }

// const App = () => {
//   return (
//     <div>
//       <Titulo cor="red" texto="Primeiro título" />
//       <Titulo cor="blue" texto="Segundo título" />
//       <Titulo cor="green" texto="Terceiro título" />
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <Titulo cor="red" texto="Primeiro título" />
//       <Titulo cor="blue" texto="Segundo título" />
//       <Titulo cor="green" texto="Terceiro título">
//         <p>Isso é o children</p>
//         <p>Testando a usabilidade do children</p>
//       </Titulo>
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App