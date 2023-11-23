import {} from "react";
import style from "../estilos/home/home.module.css"

function Home(){
    return(
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <div>
                        <h1>Global Solution 2023 - Engenharia de Sofware</h1>
                    </div>
                </div>
                <div className={style.tema}>
                    <div>
                        <img src='../src/img/mentalhealth.png'alt="tema"></img>
                    </div>
                    <div className={style.nome_soluçao}>
                        <div>
                            <h1>MoodMate</h1>
                        </div>
                        <div className={style.texto}>
                            <p>O MoodMate é uma plataforma dedicada à saúde mental, oferecendo um espaço seguro para compartilhar ansiedades e momentos de depressão. Os usuários podem relatar suas experiências diárias, encontrar apoio e conexão em uma comunidade acolhedora. A plataforma também oferece acesso a profissionais qualificados, como terapeutas e psicólogos, para orientação especializada.

Um sensor de batimento cardíaco integrado identifica picos de ansiedade e irregularidades nos batimentos, notificando os usuários e recomendando ajuda, se necessário. Privacidade e confidencialidade são prioridades, garantindo que todas as interações sejam tratadas com sigilo.

O objetivo é não apenas oferecer suporte imediato, mas também cultivar uma cultura de empatia e apoio mútuo. Procuramos promover a conscientização sobre saúde mental, proporcionando recursos tangíveis para enfrentar desafios emocionais.

É uma ferramenta vital para disseminar a importância da saúde mental, oferecendo suporte real para quem enfrenta dificuldades emocionais. Comprometidos em criar um ambiente inclusivo, buscamos ser um farol de apoio e compreensão para aqueles que precisam.</p>
                        </div>
                    </div>
                </div>
                <div className={style.solucao}>
                    <div className={style.texto}>
                        <h1>Solução</h1>
                        <p>O MoodMate busca não apenas oferecer apoio individualizado, mas também cultivar uma cultura de empatia e apoio mútuo. Promove a conscientização sobre saúde mental, fornecendo recursos tangíveis, como jornadas personalizadas de autocuidado e recomendações especializadas para gerenciamento do estresse.</p>
                    </div>
                    <div className={style.texto}>
                        <h1>Por que?</h1>
                        <p>Na sociedade atual muitas pessoas se sentem envergonhadas em procurar ajuda muitas vezes por conta de pressão familiar, religiosa, entre diversas outras razões</p>
                    </div>
                    <div className={style.texto}>
                        <h1>Funcionamento</h1>
                        <p>O MoodMate é uma plataforma abrangente que coloca a saúde mental em destaque. Começa com o registro do usuário, criando um perfil pessoal para compartilhar experiências e preocupações. O diferencial é o sensor de batimento cardíaco integrado, monitorando em tempo real os batimentos para identificar picos de ansiedade ou irregularidades.</p>
                    </div>
                </div>
                <div className={style.vantagem}>
                    <div>
                        <h1>Vantagem</h1>
                        <p> MoodMate oferece três vantagens-chave: monitoramento biométrico em tempo real para identificar momentos de ansiedade, acesso direto a profissionais de saúde mental para orientação especializada e uma comunidade acolhedora que promove apoio mútuo e empatia. Esses recursos combinam tecnologia avançada com cuidado humano, proporcionando suporte imediato e personalizado para a saúde mental dos usuários.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export  default Home