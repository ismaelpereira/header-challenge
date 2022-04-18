# Teste Header

## Como fazer?

Objetivo: Criar um Product Feed para gestão de dados de produtos
Criar uma estrutura de Product Feed com dados de produtos que possa ser atualizada frequentemente e utilizada em cache para consulta de dados com o menor tempo de resposta possível

Requisitos:

- Os serviços devem ser desenvolvidos em NODEJS / TYPESCRIPT;
- Os serviços devem ser desenvolvidos em ambiente SERVERLESS (IBM Cloud / Serviço IBM Functions)
- Ao final, publicar as informações em um ambiente git para análise estrutural do código;
- Ao final, realizar uma demonstração de no máximo 30 minutos.

Estrutura Recomendada
Importante: utilizar as versões free/gratuitas dos provedores de nuvem

1. Ambiente de Banco SQL (3 tabelas)
   Criar a seguinte estrutura de banco de dados:

SCHEMA: SYSTEM
TABELA: DOMAINS

- ID
- CID
- DOMAIN

SCHEMA: SYSTEM
TABELA PAI: PRODUCTFEEDS

- ID
- CID
- NAME
- OWNER
- CREATED AT
- UPDATED AT
- PARENT ID
- STATUS ID
- TYPE ID
- LOOKUP_KEYS
- DOMAIN_ID
- VIRTUAL_KEYS
- ROWS
- Nome do product feed
- Id do usuario “dono” deste feed
- Data da criação do feed
- Data da ultima atualização do feed

SCHEMA: CID_123 (formato: CID_IDEMPRESA)
TABELA FILHA: CA_PRODUCT_FEED_ID1_DATA (formato CA_PRODUCTFEED_IDFEEDTABELAPAI_DATA)

- product_id
- reference_id
- sku
- group_id
- name
- type
- categories
- brand
- description
- url
- price
- image_url
- in_stock
- keywords
- display_price
- gender
- surface
- best_for
- colors
- cushioning
- support
- lng:en_US:name
- lng:en_US:in_stock
- lng:en_US:url
- lng:en_US:image_url
- lng:en_US:display_price
- lng:en_GB:name
- lng:en_GB:in_stock
- lng:en_GB:url
- lng:en_GB:image_url
- lng:en_GB:display_price
- lng:fr_FR:name
- lng:fr_FR:in_stock
- lng:fr_FR:url
- lng:fr_FR:image_url
- lng:fr_FR:display_price
- lng:de_DE:name
- lng:de_DE:in_stock
- lng:de_DE:url
- lng:de_DE:image_url
- lng:de_DE:display_price

2. Ambiente Banco Redis (Cache)

ESTRUTURA:
CID/DOMAIN/DATA

3. Ambiente de Aplicação (CRUD):
   Criar aplicação NodeJS/Typescript em ambiente serverless (IBM Functions) responsável pelo CRUD de Product Feeds no banco (table system.productfeeds)

- A aplicação deve permitir a inclusão de registros na tabela (pai) com os dados genéricos do product feed e da empresa
- A cada inclusão ou delete no product feed, aplicação deve simultaneamente criar/deletar uma segunda tabela (filha) dentro do schema da empresa (ex: CID_123) com dados de produtos
- A aplicação deve permitir a edição/alteração manual de registros existentes na tabela filha
- Importante: Toda vez que um product feed for criado/deletado ou a cada inclusão/edição/delete de dados de produto, a aplicação deverá fazer sync/update dos dados no Redis/Cache, visando acelerar a consulta dos dados

4. Ambiente de Aplicação Consulta/REDIS
   Criar ambiente NODEJS/Typescript em ambiente serverless (IBM Functions) responsável pela consulta de dados em cache. A aplicação deve retornar todos os parâmetros do produto existente no product feed com base no ID.
   Importante: Os requests podem conter um ou mais product ids simultaneamente, por isso a aplicação deve ser capaz de gerenciar arrays de produtos durante a solicitação.

Ex: /GET CID/DOMAIN/PRODUCTID

## Dificuldades

No começo, decidi trabalhar com um Sequelize para utilizar como ORM no ambiente SQL, porém, nunca havia trabalhado com um ambiente desse.

## Problemas

Esse projeto está com problemas nas rotas da API e não consegui popular o banco de dados para testes maiores. Além disso, não consegui iplementar o redis no tempo que foi pedido.
