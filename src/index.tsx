import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
 
import { BrowserRouter } from 'react-router-dom';
import { createServer } from 'miragejs';

createServer({

  routes(){
    this.namespace = 'api';
    this.get('/products', () =>{
      return [
        {
          sku: 1,
          product: 'Maçã Argentina',
          description: '',
          category: 'maca',
          price: 9.90,
          image: 'https://superprix.vteximg.com.br/arquivos/ids/175207-600-600/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000',
          count:0,
          inCart: false
      },
      {
          sku: 2,
          product: 'Maçã Gala',
          description: '',
          category: 'maca',
          price: 4.74,
          image: 'https://img.sitemercado.com.br/produtos/5957852b11191e0e70421fc4592e1391247d7dcf69e41478035ca6ebeb1a1cfe_full.jpg',
          quantity: 1,
          count:0,
          inCart: false
      },
      {
          sku: 3,
          product: 'Maçã Pra Valer',
          description: 'A linha Pra Valer foi criada oferecer um produto de qualidade com preço abaixo dos demais e também visa a redução do desperdício na cadeia, devido a rejeição destes produtos quando expostos junto aos com o preço regular. Esses itens possuem algumas características específicas: - Pequenos defeitos de uniformidades (Aparência); - Calibres inferiores; - Qualidade similar ao produto convencional; - Produtos antes direcionados para indústria de processamento; - Embalados em redinha simples para diferenciação. Fora estas características, é um produto normal, porém embalado para diferenciar dos produtos cuja ficha técnica contempla maiores calibres e menos deformidades.',
          category: 'maca',
          price: 7.59,
          image: 'https://www.paodeacucar.com/img/uploads/1/639/14475639.png',
          quantity: 1,
          count:0,
          inCart: false
      },
      {
          sku: 4,
          product: 'Maçã Verde',
          description: 'Devido à sua ação anti-ácida, a maçã verde é capaz de proteger contra o aparecimento de úlceras e demais problemas decorrentes da acidez excessiva do estômago. Nesse sentido, ajuda na digestão, alivia azias e o refluxo estomacal.',
          category: 'maca',
          price: 10.99,
          image: 'https://fortatacadista.vteximg.com.br/arquivos/ids/290907-800-800/716413.jpg?v=637502893565200000',
          quantity: 1,
          count:0,
          inCart: false
      },
      {
          sku: 5,
          product: 'Manga',
          description: 'Ajuda regularizar o intestino: as fibras da manga possibilitam o trabalho adequado do intestino e evitam a constipação, também conhecida como prisão de ventre. Ajuda a fortalecer o sistema imunológico: as vitaminas A e C aumentam a imunidade e previnem doenças. Colabora com o sistema circulatório: tanto os antioxidantes quanto as fibras presentes na manga ajudam no funcionamento adequado da frequência cardíaca e dos níveis de colesterol. Beneficia a visão: por ter vitamina A, a manga ajuda a prevenir doenças como a catarata e a degeneração macular.',
          category: 'manga',
          price: 12.99,
          image: 'https://www.orquidario4e.com.br/Content/images/product/fruta00082_1_m_d_00.jpg',
          quantity: 1,
          count:0,
          inCart: false
      },
      {
          sku: 6,
          product: 'Abacaxi',
          description: 'O abacaxi é uma fruta tropical da família das frutas cítricas, como a laranja e o limão, que são ricas em vitamina C e outros antioxidantes, nutrientes essenciais para garantir a saúde. ... Quando na forma de conserva ou desidratada, deve-se dar preferência ao abacaxi sem adição de açúcar.',
          category: 'abacaxi',
          price: 5.95,
          image: 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/abacaxi-nutricao.jpg',
          quantity: 1,
          count:0,
          inCart: false
      },
      {
          sku: 7,
          product: 'Banana',
          description: 'A banana é uma fruta tropical rica em carboidratos, vitaminas e minerais que proporcionam diversos benefícios para a saúde, como garantir energia, aumentar a sensação de saciedade e de bem estar. Essa fruta é muito versátil, podendo ser consumida madura ou verde, e cujas propriedades podem variar, principalmente a nível digestivo. Essa fruta pode também ser consumida crua ou cozida, inteira ou amassada e utilizada na preparação de pratos doces ou em saladas.',
          category: 'banana',
          price: 3.66,
          image: 'https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg',
          quantity: 1,
          count:0,
          inCart: false
      },
      {
          sku: 8,
          product: 'Pêra',
          description: 'A pera é uma das frutas que mais entrega nutrientes importantes para o organismo. Por isso, quem deseja seguir uma alimentação saudável, não pode deixar de adicioná-la no cardápio - seja no café da manhã, no lanche da tarde ou no espaço entre uma refeição e outra.',
          category: 'pera',
          price: 8.32,
          image: 'https://static3.tcdn.com.br/img/img_prod/450860/1288_1_20190611093627.jpg',
          quantity: 1,
          count:0,
          inCart: false
      }

      ]

    })

    this.get('/users', () =>{
      return [
        {
          id: 1,
          nome: 'Cliente',
          sobrenome: 'Cliente Frmk',
          email: 'cliente@cliente.com',
          senha: '123456'
      },
      {
        id: 2,
        nome: 'Administrador',
        sobrenome: 'Administrador Frmk',
        email: 'adm@adm.com',
        senha: '123456'
    },
    ]
    })

 
    
  }

  
})




ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);