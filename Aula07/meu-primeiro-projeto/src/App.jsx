import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Saudacao() {
  return (
    <div style={{backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
      <h2 style={{color: '#007bff'}}>Olá, Alunos!</h2>
      <p>Este componente foi criado separadamente.</p>
    </div>
  )
}

function Sobre({produto}) {
  return (
    <div  style={{backgroundColor: 'grey', padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
      <h2 style={{color: 'red'}}>Sobre Nós</h2>
      <p style={{color: 'white'}}>Somos uma fábrica de {produto}.</p>
    </div>
  )
}

function Despedida() {
  return (
    <div style={{padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
      <h1 style={{color:'yellow'}}>Adeus</h1>
      <p>Até mais tarde minha gente.</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Olá, React!</h1>
      <p>Estou alterando meu primeiro componente.</p>

      <div style={{padding: '20px'}}>
        <h1>Minha Primeira Aula de React</h1>
        <hr />

        {/* 3. Aqui nós "chamamos" o componente que criamos acima */}
        <Sobre produto = 'garrafas'/>
        <Saudacao/>
        <Saudacao/>
        <Saudacao/>
        <Despedida/>

        <p>Note que eu posso repetir o componete quantas vezes eu quiser.</p>
      </div>
    </div>
  )
}

export default App