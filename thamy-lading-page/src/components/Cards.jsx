
import './Cards.css';

import planejamento from '../assets/planejamento.png'
import duvidas from '../assets/duvidas.png'
import encontro from '../assets/encontro.png'
import materiais from '../assets/materiais.png'

function Cards({ img, title, content }) {

    return (
        <>
            <div className='cards'>
                <div className='inner-card'>
                    <div>
                        <img src={encontro} alt="" />
                        <h2>ENCONTRO INDIVIDUAL</h2>
                    </div>
                    <span>Serão 60 minutos de mentoria, onde você receberá orientação personalizada com base em minha experiência e insights valiosos.
                    </span>
                </div>
            </div>

            <div className='cards'>
                <div className='inner-card'>
                    <div>
                        <img src={planejamento} alt="" />
                        <h2>PLANEJAMENTO</h2>
                    </div>
                    <span>Vamos analisar a sua situação, em qual etapa do planejamento você está, e a partir disso vamos traçar um planejamento, conversando um pouco sobre vistos, estudos, trabalho e imigraçãoo
                    </span>
                </div>
            </div>

            <div className='cards'>
                <div className='inner-card'>
                    <div>
                        <img src={materiais} alt="" />
                        <h2>MATERIAIS EXCLUSIVOS</h2>
                    </div>
                    <span>Você terá acesso a materiais exclusivos, um calendário de planejamento personalizado, planejamento financeiro e TUDO que você precisa antes de embarcar, documentos, remédios e até o que levar na mala.
                    </span>
                </div>
            </div>

            <div className='cards'>
                <div className='inner-card'>
                    <div>
                        <img src={duvidas} alt="" />
                        <h2>DÚVIDAS</h2>
                    </div>
                    <span>Tenho três anos de experiência no Canadá e já morei em três cidades diferentes, também estou aqui para tirar suas dúvidas.
                    </span>
                </div>
            </div>
        </>
    );
}

export default Cards;
