
import pcImage from './assets/pc-image.jpg';
import logo from './assets/logo.png'
import backgroundImage from './assets/backgroundImage.png'
import folha from './assets/folha.png'
import './App.css'

function App() {


    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', // Set background-repeat to no-repeat
    }


    return (
        <>
            <div className='wrapper'>
                <div className='first-section-wrapper'>

                    <div className='first-section'>
                        <div className='first-section-top'>
                            <div>
                                {/* <img src={logo} alt="" /> */}
                                <h1>THAMY CADORE</h1>
                                <span className='first-section-description'>
                                    O seu Instagram está parado no tempo por culpa da sua falta de planejamento, me deixa te ajudar!
                                </span>
                                <span>
                                    <button>Quero garantir minha vaga</button>
                                    <span className='compra-segura'>compra segura</span>
                                </span>
                            </div>
                            <div>
                                <iframe src="https://www.youtube.com/embed/qzmjO41PDFI?si=Gx2Tz1pQLcn7pr-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='first-section-bottom'>
                            <div>
                                <img src={pcImage} alt="" />
                            </div>
                            <div>
                                <h2>Eu ja fui como voce</h2>
                                <span>Você está prestes a ter acesso ao planejamento completo de UM ANO de conteúdo para o Instagram que vai levar seu perfil para um novo nível</span>
                                <button>Quero garantir minha vaga</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='second-section'>
                    <div>
                        <h3>Entre agora e tenha acesso a:</h3>
                        <div className='second-section-card'>
                            <img src={folha} alt="" />
                            <div>
                                <span>Lista de tarefas para organização e planejamento diário</span>
                                <span>Conteudo semanal no feed modelo arrasta e solta</span>
                                <span>365 ideias de conteudo no feed</span>
                            </div>
                        </div>
                        <div className='second-section-card'>
                            <img src={folha} alt="" />
                            <div>
                                <span>Linha editorial com definição de persona</span>
                                <span>Ferramenta de pesquisa estratégica</span>
                                <span>Agenda de conteudo diario no story</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default App
