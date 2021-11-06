# desafio-sharenergy-back-end

## Informações gerais:
- Ferramenta utilizada foi o nodejs;
- Arquitetura utilizada foi a MVC;
- Deploy feito no Heroku + database no Mongo Atlas;
- Há rotas para mostrar todos os clientes, buscar, inserir, modificar e deletar um cliente, bem como rota de testes para deletar vários;
- Há rotas para obter todos os dados da usina, com adição de "tempo_humano", e rota para obter todos os intervalos e potência_kw, bem como a média de ambos e a soma total da última;
- Front-end deployado em https://jrgcast.github.io/desafio-sharenergy-front-end (link para o repositório https://github.com/JRGCast/desafio-sharenergy-front-end);

## Falhas: 
- Não foi implementado nenhum middleware filtrante para as requisições;
- Há uma função para reescrever todos os "numeroCliente" cadastrados em cada adição ou deleção de cliente. Foi feita para substituir um 'autoincrement', pois, a implementação de 'trigger' pertinente MongoAtlas estava dando muitos erros;
- A rota de modificar o cliente sobrescreve certos valores, mesmo quando não explicitamente passados;
- Há um objeto de erros e mensagens, porém praticamente inútil, ante a falta dos middlewares para que estava destinado;
- Devido a certos imprevistos, não foi possível finalizar a implementação dos middlewares, nem a utilização do JWT para token de acesso, nem a rota de Login;
