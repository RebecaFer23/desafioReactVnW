import "./style.css"
import App from './components/Header.jsx'
import App from './components/Main.jsx'
import App from './components/Footer.jsx'
export default function App() {
  
  function mensagem() {
    setTimeout(() => {
      alert("Obrigado por acessar nosso site!")
    }, 2000)
  }


  function nome() {
    setInterval(() => {
      console.log("Excelente aula");
    }, 3000);
  }

  const [contar, setContar] = useState(0)

  function start(){
    const tempo = setInterval(()=>{
setContar(contar + 1)
    }, 2000)
  }

  return (
    <>
    <Header/>
      <h1>Olá, Mundo!</h1>
      <button onClick={mensagem}>
        É novo aqui?
        </button>

      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

<Main/>
<Footer/>
    </>

  );
}