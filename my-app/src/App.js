import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [titulo, seTitulo] = useState()
  const [descricao, setDescricacao] = useState()
  const [diretor, setDiretor] = useState()
  const [genero, setGenero] = useState()
  const [personagens, setPersonagens] = useState()
  const [video, setVideo] = useState()
  const [imagem1, setImagem1] = useState()
  const [imagem2, setImagem2] = useState()
  const [acionador, setAcionador] = useState()

  useEffect(() => {
    if (acionador === 'filme1') {
      seTitulo('Harry Potter e a Ordem da Fênix')
      setDescricacao('Harry Potter (Daniel Radcliffe) retorna à Escola de Magia e Bruxaria de Hogwarts, para cursar o 5º ano letivo. Logo ele descobre que boa parte da comunidade bruxa foi levada a acreditar que o retorno de Voldemort (Ralph Fiennes) foi uma mentira inventada por Harry, o que põe sua credibilidade em dúvida. Além disto, o Ministro da Magia Cornélio Fudge (Robert Hardy) impõe à escola a presença de Dolores Umbridge (Imelda Staunton), que torna-se a nova professora de Defesa Contra as Artes das Trevas. Acontece que as aulas de Umbridge, apesar de aprovadas pelo ministério, abrangem apenas temas amenos, deixando os alunos despreparados para os perigos dos dias atuais. Incentivado por seus amigos Rony (Rupert Grint) e Hermione (Emma Watson), Harry decide encontrar-se em segredo com um grupo de estudantes, visando a prática de magia. O grupo se autodenomina como a "Armada de Dumbledore", mas logo passa a ser vista como uma ameaça ao próprio Ministério da Magia.')
      setGenero('Fantasia, Aventura, Drama, Família')
      setDiretor('David Yates')
      setPersonagens('Daniel Radcliffe, Rupert Grint, Emma Watson')
      setVideo('https://www.youtube.com/embed/ZkDCaxUNV3o')
      setImagem1('https://uploads.emaisgoias.com.br/2021/11/c2f20579-a-ordem-da-fenix.jpg')
      setImagem2('https://f001.backblazeb2.com/file/papocine/2012/01/20181114-banner.jpg')
    }
    else if (acionador === 'filme2') {
      seTitulo('Batman')
      setDescricacao('Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede corrupta de funcionários e figuras importantes do distrito, o vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos. Durante uma de suas investigações, Bruce acaba envolvendo a si mesmo e Gordon em um jogo de gato e rato, ao investigar uma série de maquinações sádicas em uma trilha de pistas enigmáticas estabelecida pelo vilão Charada. Quando o trabalho acaba o levando a descobrir uma onda de corrupção que envolve o nome de sua família, pondo em risco a própria integridade e as memórias que tinha sobre seu pai, Thomas Wayne, as evidências começam a chegar mais perto de casa, precisando, Batman, forjar novos relacionamentos, para assim desmascarar o culpado e fazer justiça ao abuso de poder e à corrupção que há muito tempo assola Gotham City.')
      setGenero('Aventura, Ação')
      setDiretor('Matt Reeves')
      setPersonagens('Robert Pattinson, Zoë Kravitz, Paul Dano')
      setVideo('https://www.youtube.com/embed/Ww-XEGYPVUs')
      setImagem1('https://s03.video.glbimg.com/x720/9955266.jpg')
      setImagem2('https://uploads.jovemnerd.com.br/wp-content/uploads/2022/03/filme-do-batman-referencias-easter-eggs.jpg')
    }
    else if (acionador === 'filme3') {
      seTitulo('O Último Mestre do Ar')
      setDescricacao('O Último Mestre do Ar acompanha a guerra entre a Nação do Fogo com as nações da Água, do Ar e da Terra pela dominação do mundo. O conflito já dura um século e não há a menor previsão de quando chegará ao fim. Somente o aparecimento de um Avatar, único capaz de controlar os quatro elementos, poderá ajudar a restabelecer o equilíbrio. Quando Katara (Nicola Peltz) e seu irmão Sokka (Jackson Rathbone) encontram o jovem e poderoso Aang (Noah Ringer), logo percebem que estão diante de uma possível solução e para isso partem juntos numa grande e perigosa aventura em busca da paz.')
      setGenero('Aventura, Ação, Fantasia')
      setDiretor('M. Night Shyamalan')
      setPersonagens('Noah Ringer, Dev Patel, Nicola Peltz')
      setVideo('https://www.youtube.com/embed/1sKxpNCMm0A')
      setImagem1('https://cdn.falauniversidades.com.br/wp-content/uploads/2020/06/16150822/As-diferen%C3%A7as-entre-o-desenho-Avatar-e-o-filme-O-%C3%9Altimo-Mestre-do-Ar.jpg')
      setImagem2('https://conteudo.imguol.com.br/c/entretenimento/66/2020/08/07/cena-de-noah-ringer-em-o-ultimo-mestre-do-ar-2010-filme-dirigido-por-m-night-shyamalan-1596833967977_v2_3x4.jpg')
    }
    else if (acionador === 'filme4') {
      seTitulo('Sonic')
      setDescricacao('Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.')
      setGenero('Aventura, Família')
      setDiretor('Jeff Fowler')
      setPersonagens('Jim Carrey, Ben Schwartz, James Marsden')
      setVideo('https://www.youtube.com/embed/1sKxpNCMm0A')
      setImagem1('https://cdn.falauniversidades.com.br/wp-content/uploads/2020/06/16150822/As-diferen%C3%A7as-entre-o-desenho-Avatar-e-o-filme-O-%C3%9Altimo-Mestre-do-Ar.jpg')
      setImagem2('https://conteudo.imguol.com.br/c/entretenimento/66/2020/08/07/cena-de-noah-ringer-em-o-ultimo-mestre-do-ar-2010-filme-dirigido-por-m-night-shyamalan-1596833967977_v2_3x4.jpg')
    }
  }, [acionador])

  return (
    <>
      <h1>Catálogo de Filmes</h1>
      <div className='app'>
        <div className='box'>
          <img className='buttomImg' onClick={() => setAcionador('filme1')} src='https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/Harry_Potter_Order_Phoenix_2007.jpg/235px-Harry_Potter_Order_Phoenix_2007.jpg' />
        </div>
        <div className='box'>
          <img className='buttomImg' onClick={() => setAcionador('filme2')} src='https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg' />
        </div>
        <div className='box'>
          <img className='buttomImg' onClick={() => setAcionador('filme3')} src='https://upload.wikimedia.org/wikipedia/pt/8/82/The_Last_Airbender.jpg' />
        </div>
        <div className='box'>
          <img className='buttomImg' onClick={() => setAcionador('filme4')} src='https://a-static.mlcdn.com.br/618x463/revista-superposter-sonic-o-filme-europa/europa/3f98aefab7df11eaabce4201ac18501e/67e7f4630927e87e86d69522e7d74ad5.jpg' />
        </div>
      </div>      
      {acionador && (
      <div>
        <h3>{titulo}</h3>
        <p><b>Descricao:</b> {descricao}</p>
        <p><b>Genero:</b> {genero}</p>
        <p><b>Diretor:</b> {diretor}</p>
        <p><b>Personagens: </b>{personagens}</p>
        <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p><b>Imagens:</b></p>
        <img className='imagemRel' src={imagem1}/>
        <img className='imagemRel' src={imagem2}/>
      </div>
      )}
    </>
  );
}

export default App;
