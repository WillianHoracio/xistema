Xistema – Integração React Native & Spring Boot

Xistema é um projeto de integração entre um aplicativo Front-end em React Native e um servidor Back-end em Java Spring Boot.

Objetivo do Projeto:
O propósito da aplicação é auxiliar o gerenciamento de negócios no setor alimentício, como hamburguerias, pizzarias, restaurantes e similares.

Funcionalidades Planejadas

-> Gestão de Estoque e Inventário: Controle detalhado de matéria-prima e ingredientes.

-> Cálculo de Custo dos Produtos: Com base nos ingredientes, serviços e custos indiretos.

-> Estimativas Inteligentes: Análise automática da quantidade de produtos que podem ser produzidos com o estoque atual.

Expansão Futura:
Após a conclusão dessa primeira fase, será desenvolvido um novo microserviço para vendas, incluindo:

->Gerenciamento financeiro completo

->Fluxo de caixa e controle de recebimentos (Possivelmente um microsserviço separado para fins de aprendizado prático)

Esse microserviço permitirá a venda dos produtos diretamente pela plataforma, tornando a gestão ainda mais eficiente.

Tecnologias Utilizadas
Front-end: React Native
Back-end: Java + Spring Boot
Banco de Dados: Postgres

Tecnologias a serem aplicadas no futuro:
Serviço de mensageria para os pedidos (Kafka)
Publicação dos servidores na AWS

OBSERVAÇÃO IMPORTANTE:
Este repositório está em estágios iniciais de desenvolvimento, e algumas coisas ainda estão sendo testadas/remodeladas no processo. Alguns componentes não com estão com lógica estrutura finalizada.
Atualmente estou realizando a gestão de ingredientes, estando esta parte em desenvolvimento.

A API Spring também está em processo de desenvolvimento. 
Por hora, endpoints básicos estão funcionando sem validações e regra de negócio, apenas para finalidade de testes. Estarei adicionanando estas camadas durante o desenvolvimento, assim como a implementação de segurança JWT.
