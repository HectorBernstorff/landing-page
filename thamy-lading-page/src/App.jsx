
import pcImage from './assets/pc-image.jpg';
import logo from './assets/logo.png'
import backgroundImage from './assets/backgroundImage.png'
import folha from './assets/folha.png'
import './App.css'
import instagram from './assets/instagram.png'
import youtube from './assets/youtube.png'
import bgImage from './assets/bgImage.png'
import bgImageBottom from './assets/bgImageBottom.png'
import bg from './assets/bg.png'
import icons from './assets/icons.png'

function App() {


    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const backgroundStyleBottom = {
        backgroundImage: `url(${bgImageBottom})`,
        backgroundSize: 'cover',
    }


    return (
        <>
            <div style={backgroundStyle}>
                <div className='first-wrapper' >
                    <div className='bgImage' ></div>
                    <header>
                        <div>
                            <span>About</span>
                            <span>Contact</span>
                            <span>Comprar</span>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/thamycadore/"><img src={instagram} alt="instagram-icon" /></a>
                            <a href="https://www.youtube.com/@ThamyCadore"><img src={youtube} alt="youtubr-icon" /></a>
                        </div>
                    </header>
                    <div className='first-section-wrapper'>
                        <div className='first-section'>
                            <div className='title'>
                               

                                <div className='first-title'>
                                    <span>Bem vindo ao meu site!</span>
                                    <h1>Thamy Cadore</h1>
                                </div>
                                <span className='first-section-description'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam libero suscipit mollitia dolor officia sed quam maiores laboriosam aspernatur labore possimus beatae, asperiores quo consequatur itaque nobis obcaecati
                                </span>
                                <span>
                                    <button>Button</button>
                                </span>
                            </div>
                            <div className='picture'>
                                <iframe src="https://www.youtube.com/embed/qzmjO41PDFI?si=Gx2Tz1pQLcn7pr-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='second-wrapper'>
                    <div className='second-section'>
                        <div className='div-img'>
                            <div className='div-img-shadow'><img src={logo} alt="" /></div>
                        </div>
                        <div>
                            <h1>Quem sou eu?</h1>
                            <span className='first-section-description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam libero suscipit mollitia dolor officia sed quam maiores laboriosam aspernatur labore possimus beatae, asperiores quo consequatur itaque nobis obcaecati vero et? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur facere est aspernatur maiores nihil voluptates hic rerum eius vero alias quae accusantium consequuntur labore corporis, id atque magnam maxime laudantium! lore
                            </span>
                            <button>Compre</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='third-section'>

                <div className='third-title'>
                    <span>Servicos</span>
                    <h1>Entre agora e tenha acesso a:</h1>
                </div>


                <div className='cards-wrapper'>
                    <div className='cards' id='card-selected'>
                        <div className='inner-card'>
                            <img src={logo} alt="" />
                            <h2>Thamy Cadore</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla amet itaque cum? Animi at est explicabo maiores eveniet, recusandae reiciendis? Culpa rerum voluptates dolorum praesentium veniam quas odio fugit. lore</span>
                        </div>

                    </div>
                    <div className='cards'>
                        <div className='inner-card'>
                            <img src={logo} alt="" />
                            <h2>Thamy Cadore</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla amet itaque cum? Animi at est explicabo maiores eveniet, recusandae reiciendis? Culpa rerum voluptates dolorum praesentium veniam quas odio fugit.</span>
                        </div>


                    </div>
                    <div className='cards'>
                        <div className='inner-card'>
                            <img src={logo} alt="" />
                            <h2>Thamy Cadore</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla amet itaque cum? Animi at est explicabo maiores eveniet, recusandae reiciendis? Culpa rerum voluptates dolorum praesentium veniam quas odio fugit.</span>
                        </div>


                    </div>

                    <div className='cards'>
                        <div className='inner-card'>
                            <img src={logo} alt="" />
                            <h2>Thamy Cadore</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla amet itaque cum? Animi at est explicabo maiores eveniet, recusandae reiciendis? Culpa rerum voluptates dolorum praesentium veniam quas odio fugit.</span>
                        </div>


                    </div>

                </div>

            </div>

            <div className='forth-section'>
                <div>
                    <div>
                        <h2>Por onde vou acessar meu planejamento?</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima odio quis distinctio qui nisi ullam, numquam laborum, quos doloribus illo recusandae, molestias asperiores accusantium neque voluptates id a dicta cum!</p>
                        <button>quero</button>
                    </div>
                    <div className='image-wrapper'>
                        <img src={logo} alt="" />
                    </div>
                </div>

            </div>

            <div className='forth-section-copy'>
                <div>
                    <div className='image-wrapper'>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h2>Por onde vou acessar meu planejamento?</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima odio quis distinctio qui nisi ullam, numquam laborum, quos doloribus illo recusandae, molestias asperiores accusantium neque voluptates id a dicta cum!</p>
                        <button>quero</button>
                    </div>
                </div>

            </div>

            <div className='fifth-section'>

                <div className='fifth-inner-wrapper'>
                    <h1>FAQ</h1>

                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda sed. Amet aperiam, magnam neque qui, illo animi modi temporibus vero minima eaque itaque iure porro laboriosam reiciendis. Nam, soluta!</span>
                    </div>

                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda sed. Amet aperiam, magnam neque qui, illo animi modi temporibus vero minima eaque itaque iure porro laboriosam reiciendis. Nam, soluta!</span>
                    </div>

                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda sed. Amet aperiam, magnam neque qui, illo animi modi temporibus vero minima eaque itaque iure porro laboriosam reiciendis. Nam, soluta!</span>
                    </div>

                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda sed. Amet aperiam, magnam neque qui, illo animi modi temporibus vero minima eaque itaque iure porro laboriosam reiciendis. Nam, soluta!</span>
                    </div>

                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda sed. Amet aperiam, magnam neque qui, illo animi modi temporibus vero minima eaque itaque iure porro laboriosam reiciendis. Nam, soluta!</span>
                    </div>
                </div>


            </div>

            <div className='second-wrapper' style={backgroundStyleBottom}>
                <div className='second-section'>
                    <div className='div-img'>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <span>a bit</span>
                        <h3>About me</h3>
                        <div className='list'>
                            <span>life</span>
                            <span>Education</span>
                            <span>Experience</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius neque officia voluptatum quaerat tenetur perspiciatis, dicta ab, ipsam suscipit accusamus officiis animi iure delectus quibusdam possimus deserunt libero illum!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deserunt at iusto suscipit a odio quae recusandae sapiente, nam hic voluptates dignissimos maiores ratione repellat minus consectetur impedit, ab dolores.
                        </p>
                        <button>Compre</button>
                    </div>
                </div>
            </div>

            <section className='valor'>
                <div className='valor-description'>
                    <span>Valor do investimento paraser produtivo:</span>
                    <h2>12x 6,43</h2>
                    <span>ou R$64,00 à vista</span>
                    <button>Quero ser produtivo!</button>
                    <span>Apenas R$0,21 por dia ao longo do ano, são suficientes para obter
                        acesso a um conteúdo exclusivo que o auxiliará a organizar-se
                        de forma ágil e eficiente em sua rotina diária.</span>
                </div>

                <div className='garantia'>

                    <span>Garantia de 7 dias</span>
                    <span>Teste o meu treinamento Meu Conteúdo Planejado por 7 dias e se você achar que não é pra você, poderá pedir reembolso sem complicações!</span>


                </div>
            </section>

            <footer>
                <div>
                    <img src={instagram} alt="" />
                    <img src={youtube} alt="" />
                </div>

                <span>Terms of use - Provacy poilicy</span>

                <span>© 2023 Thamy Cadore</span>
            </footer>
        </>
    )
}

export default App
