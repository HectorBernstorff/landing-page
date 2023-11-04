

import logo from './assets/logo.png'

import './App.css'
import instagram from './assets/instagram.png'
import youtube from './assets/youtube.png'

import bgImageBottom from './assets/bgImageBottom.png'
import smallLogo from './assets/smallLogo.png'
import bg from './assets/bg.png'

import { useState, useEffect } from 'react';
import ExpandableSection from './components/ExpandableSection'
import fotoThamy from './assets/fotoThamy.jpg'

import planejamento from './assets/planejamento.png'
import duvidas from './assets/duvidas.png'
import encontro from './assets/encontro.png'
import materiais from './assets/materiais.png'

import Cards from './components/Cards'
import Termos from './components/Termos'

import jaFui from './assets/jaFui.png'
import comprarAgora from './assets/comprarAgora.jpg'
import quemSou from './assets/quemSou.jpg'

function App() {

    const [termos, setTermos] = useState(false);

    const openTermos = () => {
        setTermos(true);
        document.body.style.overflow = 'hidden';
    };

    const closeTermos = () => {
        setTermos(false);
        document.body.style.overflow = 'auto';
    };


    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',

    }

    return (
        <>
            <div className='bg' style={backgroundStyle}>

                <div>
                    <header>
                        <div className='header-items'>
                            <span>About</span>
                            <span>Contact</span>
                            <span>Comprar</span>
                        </div>

                        <div>
                            <span className='header-title'>THAMY CADORE</span>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#2d9df9" d="M 356.210938 212.023438 C 375.058594 201.132812 375.058594 173.90625 356.210938 163.03125 C 342.671875 155.214844 338.042969 137.917969 345.855469 124.394531 C 356.734375 105.53125 343.128906 81.960938 321.359375 81.960938 C 305.730469 81.960938 293.066406 69.296875 293.066406 53.679688 C 293.066406 31.898438 269.496094 18.292969 250.644531 29.183594 C 237.121094 36.984375 219.808594 32.355469 212.007812 18.828125 C 201.117188 -0.0351562 173.90625 -0.0351562 163.015625 18.828125 C 155.203125 32.355469 137.90625 36.984375 124.378906 29.183594 C 105.519531 18.292969 81.949219 31.898438 81.949219 53.679688 C 81.949219 69.296875 69.28125 81.960938 53.667969 81.960938 C 31.886719 81.960938 18.28125 105.53125 29.171875 124.394531 C 36.984375 137.917969 32.339844 155.214844 18.816406 163.03125 C -0.0351562 173.90625 -0.0351562 201.132812 18.816406 212.023438 C 32.339844 219.824219 36.984375 237.121094 29.171875 250.660156 C 18.28125 269.507812 31.898438 293.078125 53.667969 293.078125 C 69.28125 293.078125 81.949219 305.742188 81.949219 321.371094 C 81.949219 343.140625 105.519531 356.746094 124.378906 345.867188 C 137.90625 338.054688 155.203125 342.683594 163.015625 356.210938 C 173.90625 375.074219 201.117188 375.074219 212.007812 356.210938 C 219.808594 342.683594 237.121094 338.054688 250.644531 345.867188 C 269.496094 356.746094 293.066406 343.140625 293.066406 321.371094 C 293.066406 305.742188 305.730469 293.078125 321.359375 293.078125 C 343.128906 293.078125 356.734375 269.507812 345.855469 250.660156 C 338.042969 237.121094 342.671875 219.824219 356.210938 212.023438 " fill-opacity="1" fill-rule="nonzero" /><path fill="#ffffff" d="M 288.226562 140.097656 L 261.71875 113.605469 L 167.113281 208.214844 L 121.300781 162.402344 L 94.796875 188.910156 L 140.605469 234.707031 L 140.371094 234.941406 L 166.878906 261.433594 L 167.097656 261.210938 L 167.332031 261.445312 L 193.839844 234.941406 L 193.617188 234.707031 L 288.226562 140.097656 " fill-opacity="1" fill-rule="nonzero" /></svg>
                        </div>

                    </header>
                    <div className='foto-banner'>
                        <img src={fotoThamy} alt="" />
                        <img className='small-logo' src={smallLogo} alt="" />
                    </div>
                    <div className='first-section'>
                        <div>
                            <span className='first-section-description'>
                                <p>É hora de transformar seu sonho de <span>viver no Canadá</span> em um plano concreto, me deixa te ajudar!</p>
                            </span>
                        </div>
                        <div className='picture'>
                            <iframe src="https://www.youtube.com/embed/qzmjO41PDFI?si=Gx2Tz1pQLcn7pr-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>
                            <span>
                                <a href="#checkout"><button>Garanta sua vaga</button></a>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='forth-section'>
                    <div>
                        <div>
                            <h2>Eu já fui como você!</h2>
                            <p>Você está prestes a embarcar na jornada da sua mudança para o Canadá, e estou aqui para te guiar com base na minha própria experiência e compartilhar dicas valiosas para que você não repita os mesmos erros.</p>
                            <a href="#checkout"><button>Quero ser mentorado</button></a>
                        </div>
                        <img src={jaFui} alt="" />
                    </div>

                </div>

                <div className='forth-section-copy'>
                    <div>
                        <img src={comprarAgora} alt="" />
                        <div>
                            <h2>Por que garantir sua vaga agora é essencial para sua Jornada no Canadá?
                            </h2>
                            <p>Essa mentoria é o caminho completo de como dar start no seu Plano Canadá! Perfeito para todas as etapas da sua jornada, desde iniciantes até aqueles que desejam aperfeiçoar seu planejamento.
                            </p>
                            <p>
                                Você terá acesso imediato a materiais exclusivos! As vagas na mentoria são limitadas, não perca mais tempo e comece a trilhar seu caminho para o Canadá hoje mesmo.
                            </p>
                            <a href="#checkout"><button>Garantir minha vaga</button></a>
                        </div>
                    </div>

                </div>




            </div>

            <div className='third-section'>

                <div className='third-title'>
                    <h1>TENHA ACESSO A:</h1>
                </div>

                <div className='cards-wrapper'>


                    <Cards />
                </div>

            </div>


            <div className='second-section'>
                <div className='div-img'>
                    <img src={logo} alt="" />
                </div>
                <div className='second-section-description'>
                    <h1>Quem sou eu?</h1>
                    <span className='first-section-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam libero suscipit mollitia dolor officia sed quam maiores laboriosam aspernatur labore possimus beatae, asperiores quo consequatur itaque nobis obcaecati vero et? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur facere est aspernatur maiores nihil voluptates hic rerum eius vero alias quae accusantium consequuntur labore corporis, id atque magnam maxime laudantium! lore
                    </span>
                    <a href="#checkout"><button>Compre</button></a>
                </div>
            </div>

            <div className='second-section-mobile'>
                <div className='second-section-description'>
                    <h1>Quem sou eu?</h1>
                    <span className='first-section-description'>

                        <p>Olá! Sou Thamy Cadore, e minha paixão é compartilhar minha jornada de vida no Canadá com você.
                        </p>

                        <p>Com três anos de experiência no país e a vivência em três cidades diferentes, passei por desafios, perrengues, aprendizados e conquistas que moldaram minha trajetória. Agora, estou aqui para ajudar você a tornar seu sonho de viver no Canadá uma realidade.
                        </p>

                        <p>Minha missão é fornecer orientação personalizada e insights valiosos, além de recursos exclusivos, para que sua transição para o Canadá seja suave e bem-sucedida. Juntos, vamos planejar sua mudança, superar desafios e tornar seu sonho canadense uma conquista.
                        </p>

                        <p>Estou animada para ser parte da sua jornada e ajudar você a trilhar o caminho para o Canadá. Vamos transformar seu sonho em realidade!</p>
                    </span>

                </div>

                <div className='div-img'>
                    <img src={quemSou} alt="" />
                </div>

                <a href="#checkout" className='second-section-mobile-button'><button >QUERO GARANTIR MINHA VAGA</button></a>
            </div>



            <div className='pattern-bg'>
                <div className='fifth-section'>
                    <div className='fifth-inner-wrapper'>
                        <h1 className='faq'>FAQ</h1>

                        <ExpandableSection
                            title="Onde ocorrerá a mentoria?"
                            content="Você terá acesso à mentoria por meio do Google Meet. Além disso, você receberá acesso a uma plataforma exclusiva onde encontrará o passo a passo para agendar a mentoria, bem como materiais, bônus exclusivos de parceiros e outros recursos relacionados."
                        />
                        <hr />
                        <ExpandableSection
                            title="É necessário já possuir conhecimento sobre o assunto?"
                            content="Não, a mentoria é adequada tanto para aqueles que desejam dar o primeiro passo quanto para aqueles que já estão no meio do processo, mas gostariam de ajuda."
                        />
                        <hr />
                        <ExpandableSection
                            title="Posso participar da mentoria de qualquer lugar do mundo?"
                            content="Sim, a mentoria da Thamy Cadore é acessível a pessoas de qualquer parte do mundo. Não importa onde você esteja localizado, você pode aproveitar nossa orientação personalizada e recursos exclusivos para planejar sua mudança para o Canadá. A orientação e os materiais estão disponíveis online, tornando-a acessível a todos que desejam realizar o sonho de viver no Canadá."
                        />
                        <hr />
                        <ExpandableSection
                            title="Há alguma garantia oferecida pela mentoria?"
                            content="Sim, oferecemos uma garantia de satisfação de 7 dias. Após o encontro individual, não haverá reembolso. Se, dentro desses primeiros 7 dias, você não estiver satisfeito com a mentoria e acreditar que não está obtendo o valor esperado, entre em contato conosco. No entanto, é importante ressaltar que a mentoria da Thamy Cadore não se trata de consultoria de imigração, e não garantimos aprovação em processos de visto, residência ou cidadania canadense. É crucial que você compreenda que é totalmente responsável por sua aplicação de visto, documentação e requisitos de imigração."
                        />

                    </div>
                </div>
            </div>


            <section className='valor-section' id='checkout'>
                <div className='valor-description'>
                    <h1>
                    Valor do investimento para dar o primeiro passo: 

                    </h1>
                    

                    <div className='price'>
                        <div className='por-apenas'>
                            <p>Apenas</p>
                        </div>
                        <div>

                            <h2>12x 91,68</h2>
                            <span className='full-price'>ou <span>R$897</span> à vista</span>
                        </div>
                    </div>


                    <a href="https://sun.eduzz.com/2145422"><button>Quero morar no Canada!</button></a>

                    <div className='seguranca'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            <span>Compra segura</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Garantioa incondicional</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <span>Site 100% protegido</span>
                        </div>
                    </div>

                </div>

            </section>

            <footer>
                <span onClick={openTermos}>Terms of use - Provacy poilicy</span>

                <span>© 2023 Thamy Cadore</span>
            </footer>



            <div>
                <Termos termos={termos} closeTermos={closeTermos} />
                {/* <button onClick={closeTermos}>close</button> */}
            </div>


        </>
    )
}



export default App
