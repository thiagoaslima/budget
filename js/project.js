$(function (w, doc, $, undefined) {
    'use strict';

    var Project = {

        name: "Site Sincomam",
        subheader: "",

        stages: [

            {
                number: 1,
                name: "Planejamento",
                desc: 'Etapa de estruturação teórica do site. Definição de requisitos, estruturas e objetivos do site',
                defPrice: 850,

                core: [

                    {
                        name: "Pesquisa",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Levantamento de dados",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Estruturação dos requisitos",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Arquitetura da informação",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Hierarquia do conteúdo",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Diretrizes de CMS",
                        desc: "",
                        more: ""
                    }
                ]
            },

            {
                number: 2,
                name: "Design",
                desc: 'Construção da identidade visual do site e definição dos elementos e processos interativos das páginas',
                defPrice: 1200,

                core: [

                    {
                        name: "Identidade Visual",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Biblioteca de Elementos",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Template da Home",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Template das páginas estáticas",
                        desc: "previsão de 8 a 10 páginas diferentes",
                        more: ""
                    },

                    {
                        name: "Template das páginas dinâmicas",
                        desc: "previsão de 15 a 20 páginas diferentes",
                        more: ""
                    },

                    {
                        name: "Formulários",
                        desc: "contato, cadastro, atualização, currículo, login",
                        more: ""
                    },

                    {
                        name: "Wireframes",
                        desc: "",
                        more: ""
                    }
                ],

                extra: [
                    {
                        name: "Design responsivo",
                        desc: "O conteúdo de um web site responsivo vai se adequar ao espaço disponível, sem perder a capacidade de transmitir o necessário ao usuário, independente do tamanho do aparelho usado para o acesso.",
                        more: "",
                        price: 400,
                    }
                ]
            },

            {
                number: 3,
                name: "Desenvolvimento",
                desc: 'Codificação dos módulos e estruturas do site. Escrita dos códigos html, css, javascript e servidor',
                defPrice: 1400,

                core: [

                    {
                        name: "Adaptação do CMS",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Produção dos códigos da interface do CMS",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "HTML/CSS das páginas estáticas",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "HTML/CSS das páginas dinâmicas",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Código dos formulários",
                        desc: "contato, cadastro, atualização, currículo, login",
                        more: ""
                    }
                ]
            },

            {
                number: 4,
                name: "Implementação",
                desc: 'Configuração de servidor e tecnologias responsáveis pelo funcionamento do sistema',
                defPrice: 1400,

                core: [

                    {
                        name: "Configuração dp Banco de Dados",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Configuração dos módulos de servidor Apache",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Sistema de Login",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Gerenciamento de Sessão",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Pacote essencial de atualização'de conteúdo",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "HTML/CSS das páginas dinâmicas",
                        desc: "",
                        more: ""
                    },

                    {
                        name: "Código dos formulários",
                        desc: "contato, cadastro, atualização, currículo, login",
                        more: ""
                    }
                ]
            },

            {
                number: 5,
                name: "Finalização e Lançamento",
                desc: 'Revisão e testes do sistema para garantia de funcionamento correto',
                defPrice: 550,

                core: [

                    {
                        name: "Teste de cross browser",
                        desc: "IE7+ e as versões mais atuais de Chrome, Firefox, Ópera e Safari em plataforma Windows",
                        more: ""
                    },

                    {
                        name: "Treinamento do profissional responsável pela atualização do site",
                        desc: "até 2h de acompanhamento do usuário no uso do sistema",
                        more: ""
                    },

                    {
                        name: "Garantia de 120 dias",
                        desc: "garantindo o correto funcionamento dos sistemas instalados",
                        more: ""
                    }
                ]
            }
        ]
    };

    w.Project = Project;
}(this, this.document, this.jQuery));