import './Termos.css';

function Termos({ termos, closeTermos }) {

    return (
        <>
            {termos ? (
                <div className='termos-condicoes' onClick={closeTermos}>
                    
                    <div className='inner-termos'>
                    <div className='close-termos' onClick={closeTermos}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>

                    </div>
                        <h1>Termos e Condições do Serviço de Mentoria Thamy Cadore</h1>

                        <div>
                            <h2>1. Natureza do Serviço e Responsabilidade do Aluno:
                            </h2>
                            <span>Nossos serviços de mentoria têm como objetivo fornecer orientação, informações e apoio baseados em experiências pessoais. É importante ressaltar que não se trata de consultoria de imigração, e não garantimos aprovação em processos de visto, residência ou cidadania canadense, nem a possibilidade de residir no Canadá. É crucial que você compreenda que é totalmente responsável por sua aplicação de visto, documentação e requisitos de imigração, bem como por seguir os procedimentos necessários para uma possível mudança para o Canadá.
                            </span>
                        </div>

                        <div>
                            <h2>2. Confidencialidade:</h2>
                            <span>Todas as informações e discussões durante a mentoria são estritamente confidenciais. Você concorda em não compartilhar qualquer informação, material ou conteúdo da mentoria com terceiros, seja de forma verbal, escrita ou eletrônica.
                            </span>
                        </div>

                        <div>
                            <h2>3. Uso de Imagem:</h2>
                            <span> É estritamente proibido capturar, gravar ou tirar fotos de qualquer material ou interação na mentoria, a menos que seja autorizado. O uso não autorizado de imagens ou compartilhamento de conteúdo protegido é passível de ação legal. No entanto, a mentora se reserva o direito de utilizar a imagem dos mentorados para fins promocionais, publicitários e de marketing, incluindo, mas não se limitando a, divulgação em suas redes sociais, website, materiais de marketing e outros meios relacionados à mentoria.
                            </span>
                        </div>

                        <div>
                            <h2>4. Responsabilidade do Aluno: </h2>
                            <span>É fundamental enfatizar que você é totalmente responsável por sua própria aplicação de visto, documentação, requisitos de imigração e por cumprir quaisquer outros procedimentos necessários para a possível mudança para o Canadá. A mentoria não substitui esses processos nem garante sua aprovação. A decisão e a responsabilidade finais sobre sua elegibilidade e sucesso no processo de imigração são inteiramente suas. A mentoria visa apenas fornecer orientação e apoio com base em experiências pessoais, não eximindo você da necessidade de seguir as diretrizes oficiais das autoridades de imigração canadenses. É altamente recomendável que você busque a orientação profissional de um consultor de imigração licenciado para garantir que todos os aspectos do processo sejam tratados de acordo com a legislação atual e regulamentos de imigração.
                            </span>
                        </div>

                        <div>
                            <h2>5. Informações:</h2>
                            <span> Todas as informações fornecidas durante a mentoria são baseadas em experiências pessoais e podem não refletir a legislação ou procedimentos de imigração mais recentes. É de sua responsabilidade verificar e seguir as diretrizes oficiais das autoridades de imigração canadenses.
                            </span>
                        </div>

                        <div>
                            <h2>
                                6. Renúncia de Responsabilidade: </h2>
                            <span>A mentoria é oferecida "como está" e sem garantias de qualquer tipo, expressas ou implícitas. A mentora não é responsável por quaisquer consequências decorrentes de suas decisões ou ações após a mentoria.
                            </span>
                        </div>

                        <div>
                            <h2>7. Alterações nos Termos: </h2>
                            <span>A Mentora se reserva o direito de alterar ou atualizar estes termos e condições a qualquer momento. Quaisquer alterações serão comunicadas a você por e-mail ou por meio da plataforma de mentoria.
                            </span>
                        </div>

                        <div>
                            <h2>8. Limitação de Responsabilidade:</h2>
                            <span>Em consonância com as disposições do Código de Defesa do Consumidor brasileiro, a responsabilidade da Thamy Cadore está circunscrita ao valor financeiro despendido na contratação dos serviços de mentoria. É imperativo ressaltar a completa exoneração da empresa quanto a ressarcimentos relativos a danos indiretos, incidentais ou consequenciais, limitando-se ao escopo das obrigações contratuais e preceitos legais vigentes.
                            </span>
                        </div>

                        <div>
                            <h2>9. Alterações nos Termos e Condições:</h2>
                            <span>A mentora reserva-se o inalienável direito de efetuar modificações nas disposições destes termos e condições, em estrita conformidade com a legislação em vigor. As alterações serão comunicadas através de correspondência eletrônica.
                            </span>
                        </div>

                        <div>
                            <h2>10.Direito de Recusa de Serviço:</h2>
                            <span>A mentora reserva o direito inapelável de recusar a prestação de serviços a indivíduos que violam as cláusulas destes termos e condições ou se envolvem em práticas incongruentes, de acordo com as políticas e regulamentos da empresa. O exercício desse discernimento, em relação às medidas sancionatórias, tem como objetivo garantir um ambiente respeitoso e seguro para todos.
                            </span>
                        </div>
                        <div>
                            <h2>11. Lei Aplicável e Jurisdição:</h2>
                            <span>Este acordo é regido pelas leis da República Federativa do Brasil e está sujeito à jurisdição exclusiva dos tribunais da comarca de São Paulo, em consonância com o ordenamento jurídico do Brasil.
                            </span>
                        </div>

                        <div>
                            <h2>12. Cancelamento e Reembolso:</h2>
                            <span> Em estrita conformidade com o quadro legal da República Federativa do Brasil, delineamos as seguintes diretrizes concernentes ao cancelamento e reembolso pela Thamy Cadore: No efêmero prazo de 7 dias, contados a partir do ato de aquisição dos serviços, poder-se-á requerer a rescisão contratual, facultando-se, assim, o desfrute de reembolso total. Cumpre ressaltar, no entanto, que a dedução de encargos administrativos será considerada, conforme as normas legais e contratuais. Após o período inicial de 7 dias desde a contratação, não será possível solicitar reembolsos, e não haverá disponibilidade para concessões financeiras.
                            </span>
                        </div>

                        <span>Ao adquirir nossos serviços de mentoria, você concorda integralmente com estes termos e condições.</span>
                    </div>

                </div>
            ) : (
                <></>
            )}


        </>
    );
}

export default Termos;