import './App.css';
import smallLogo from './assets/smallLogo.png';
import bg from './assets/bg.png';
import { useState } from 'react';
import ExpandableSection from './components/ExpandableSection/ExpandableSection';
import fotoThamy from './assets/fotoThamy.jpg';
import Cards from './components/Cards/Cards';
import Termos from './components/Termos/Termos';
import jaFui from './assets/jaFui.png';
import comprarAgora from './assets/comprarAgora.jpg';
import quemSou from './assets/quemSou.jpg';
import Header from './components/Header/Header';
import planejamento from './assets/planejamento.png'
import duvidas from './assets/duvidas.png'
import encontro from './assets/encontro.png'
import materiais from './assets/materiais.png'

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

            <Header />

            <main>
                <div className='background' style={backgroundStyle}>

                    <section className='banner'>
                        <img src={fotoThamy} alt="" />
                        <img src={smallLogo} alt="" />
                    </section>

                    <section className='apresentacao' >
                        <div>
                            <div className='first-section-description'>
                                <img className='small-logo-full' src={smallLogo} alt="" />
                                <p>É hora de transformar seu sonho de <span>viver no Canadá</span> em um plano concreto, me deixa te ajudar!</p>
                            </div>
                            <a href="#checkout" className='button-top'><button>Garanta sua vaga</button></a>
                        </div>
                        <div className='picture'>
                        <iframe src="https://www.youtube.com/embed/kb01rv1PZh0" title="Mentoria Thamy Cadore" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='button-bottom'>

                            <a href="#checkout"><button>Garanta sua vaga</button></a>

                        </div>
                    </section>

                    <section className='second-section'>
                        <div className='div-img'>
                            <img src={quemSou} alt="" />
                        </div>
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
                            <a href="#checkout"><button>Compre</button></a>
                        </div>
                    </section>
                </div>

                <section className='forth-section'>
                    <div className='forth-section-inner'>
                        <div>
                            <h2>Eu já fui como você!</h2>
                            <p>Você está prestes a embarcar na jornada da sua mudança para o Canadá, e <span className='bold'>estou aqui para te guiar</span> com base na minha própria experiência e compartilhar dicas valiosas para que você não repita os mesmos erros.</p>
                            <a href="#checkout"><button>Quero ser mentorado</button></a>
                        </div>
                        <div><img src={jaFui} alt="" /></div>
                    </div>
                </section>

                <section className='forth-section-copy'>
                    <div className='forth-section-inner-copy'>
                        <div><img src={comprarAgora} alt="" /></div>
                        <div>
                            <h2>Por que garantir sua vaga agora é essencial para sua Jornada no Canadá?
                            </h2>
                            <p>Essa mentoria é o caminho completo de como dar <span className='bold'>start no seu Plano Canadá!</span> Perfeito para todas as etapas da sua jornada, desde iniciantes até aqueles que desejam aperfeiçoar seu planejamento e <span className='bold'>as vagas na mentoria são limitadas</span>, não perca mais tempo e comece a trilhar seu caminho para o Canadá hoje mesmo.
                            </p>
                            <a href="#checkout"><button>Garantir minha vaga</button></a>
                        </div>
                    </div>
                </section>

                <section className='third-section'>
                    <div className='third-title'>
                        <h1>TENHA ACESSO A:</h1>
                    </div>
                    <div className='cards-wrapper'>
                        <Cards
                            img={encontro}
                            title="ENCONTRO INDIVIDUAL"
                            content="Serão 60 minutos de mentoria, onde você receberá orientação personalizada com base em minha experiência e insights valiosos."
                        />
                        <Cards
                            img={planejamento}
                            title="PLANEJAMENTO"
                            content="Vamos analisar a sua situação, em qual etapa do planejamento você está, e a partir disso vamos traçar um planejamento, conversando um pouco sobre vistos, estudos, trabalho e imigraçãoo"
                        />
                        <Cards
                            img={materiais}
                            title="MATERIAIS EXCLUSIVOS"
                            content="Acesso imediato a materiais que te dirão o caminho a seguir com o calendário de planejamento, descobrirá quanto irá gastar no Plano Canadá com planner financeiro e TUDO que você precisa na hora do embarque."
                        />
                        <Cards
                            img={duvidas}
                            title="DÚVIDAS"
                            content="Tenho três anos de experiência no Canadá e já morei em três cidades diferentes, também estou aqui para tirar suas dúvidas."
                        />
                    </div>
                </section>

                <hr />

                <section className='bonus'>
                    <div className='inner-bonus'>
                        <h2>SÃO MAIS DE R$1.900 EM BENEFÍCIOS!
                        </h2>
                        <div>
                            <p>Você vai <span className='bold-bonus underline'>ganhar mais de R$1.740 em descontos</span> com meus grandes parceiros nos serviços de aplicação de vistos, consultoria educacional, imigração, matrícula em college, internet de celular e assessoria na hora de alugar imóvel no Canadá!
                            </p>
                            <p>Além disso, você terá <span className='bold-bonus'>acesso imediato a materiais exclusivos</span>, as ferramentas corretas para alcançar seus objetivos! Como o calendário de planejamento personalizado, todo planejamento financeiro e <span className='bold-bonus-black'>TUDO o que você precisa saber</span> antes de embarcar desde documentos, remédios a preparação da mala. Apenas esses materiais são mais de R$200 que você vai ganhar como <span className='bold-bonus'>bônus da mentoria.</span>
                            </p>
                        </div>
                    </div>
                </section>

                <div className='pattern-bg'>
                    <section className='fifth-section'>
                        <div className='fifth-inner-wrapper'>
                            <h1 className='faq'>FAQ</h1>
                            <ExpandableSection
                                title="Onde ocorrerá a mentoria?"
                                content="Você terá acesso à mentoria por meio do Google Meet. Além disso, você receberá acesso a uma plataforma exclusiva onde encontrará o passo a passo para agendar a mentoria, bem como materiais, bônus exclusivos de parceiros e outros recursos relacionados."
                            />
                            <ExpandableSection
                                title="É necessário já possuir conhecimento sobre o assunto?"
                                content="Não, a mentoria é adequada tanto para aqueles que desejam dar o primeiro passo quanto para aqueles que já estão no meio do processo, mas gostariam de ajuda."
                            />
                            <ExpandableSection
                                title="Posso participar da mentoria de qualquer lugar do mundo?"
                                content="Sim, a mentoria da Thamy Cadore é acessível a pessoas de qualquer parte do mundo. Não importa onde você esteja localizado, você pode aproveitar nossa orientação personalizada e recursos exclusivos para planejar sua mudança para o Canadá. A orientação e os materiais estão disponíveis online, tornando-a acessível a todos que desejam realizar o sonho de viver no Canadá."
                            />
                            <ExpandableSection
                                title="Há alguma garantia oferecida pela mentoria?"
                                content="Sim, oferecemos uma garantia de satisfação de 7 dias. Após o encontro individual, não haverá reembolso. Se, dentro desses primeiros 7 dias, você não estiver satisfeito com a mentoria e acreditar que não está obtendo o valor esperado, entre em contato conosco. No entanto, é importante ressaltar que a mentoria da Thamy Cadore não se trata de consultoria de imigração, e não garantimos aprovação em processos de visto, residência ou cidadania canadense. É crucial que você compreenda que é totalmente responsável por sua aplicação de visto, documentação e requisitos de imigração."
                            />
                        </div>
                    </section>
                </div>

                <section className='second-section-mobile'>
                    <div className='second-section-mobile-inner'>
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
                </section>

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
                                <span>Garantia de 7 dias</span>
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
            </main>

            <footer>
                <span onClick={openTermos}><span className='underline'>Termos de Uso</span> - Política de Privacidade</span>

                <span>© 2023 Thamy Cadore</span>
            </footer>



            <div>
                <Termos termos={termos} closeTermos={closeTermos} />

            </div>


        </>
    )
}



export default App
