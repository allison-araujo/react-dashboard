(this["webpackJsonpdashboard-test"]=this["webpackJsonpdashboard-test"]||[]).push([[0],{347:function(e,n,t){"use strict";t.r(n);var a,r=t(1),o=t.n(r),c=t(71),i=t.n(c),d=t(8),l=t(9),s=Object(d.b)(a||(a=Object(l.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html, body, #root{\n        height: 100%;\n    }\n\n    *, button, input {\n        border: 0;\n        outline: 0;\n        font-family: 'Roboto' ,sans-serif;\n    }\n    button {\n        cursor: pointer;\n    }\n"]))),u=t(20),p={title:"dark",colors:{primary:"#1C1C1C",secundary:"#363636",tertiary:"\t#000",white:"#FFF",black:"#000",gray:"#BFBFBF",sucess:"#32CD32",info:"\t#FFD700",corMenu:"#DC143C",warning:"#DC143C",filtro:"#FF4500",filtroVerde:"#0000CD"}},h={title:"light",colors:{primary:"#E0FFFF",secundary:"#E0FFFF",tertiary:"\t#F0FFFF",white:"#000",black:"#FFF",gray:"#BFBFBF",sucess:"#32CD32",info:"\t#FFD700",corMenu:"#8B008B",warning:"#DC143C",filtro:"#FF4500",filtroVerde:"#008000"}},b=t(3),f=Object(r.createContext)({}),x=function(e){var n=e.children,t=Object(r.useState)((function(){var e=localStorage.getItem("@react-dashboard:theme");return e?JSON.parse(e):p})),a=Object(u.a)(t,2),o=a[0],c=a[1];return Object(b.jsx)(f.Provider,{value:{alterarTheme:function(){"dark"===o.title?(c(h),localStorage.setItem("@react-dashboard:theme",JSON.stringify(h))):(c(p),localStorage.setItem("@react-dashboard:theme",JSON.stringify(p)))},theme:o},children:n})};function j(){return Object(r.useContext)(f)}var m,v,g,O,y,w,C,q,F,k,S,D,E,M,z,N,P,T,B,V,Y,R,J,A,I,L,K,H,_,W,G,Q,X,$,U,Z,ee,ne,te,ae,re=t(123),oe=t(21),ce=d.c.div(m||(m=Object(l.a)(["\n    /** \n    * layout\n    *main header - \n    *CT- content\n    * AS - asside\n     */\n//configuracao de layout\n    display: grid;\n    grid-template-columns: 250px auto;\n    grid-template-rows: 70px auto;\n    grid-template-areas: \n    'AS MH'\n    'AS CT';\n\n    height: 100vh;\n\n    @media(max-width:600px){\n        grid-template-columns: 100%;\n        grid-template-rows: 70px auto;\n        grid-template-areas: \n        'MH'\n        'CT';\n    }\n    \n"]))),ie=d.c.div(v||(v=Object(l.a)(["\n/**grid configuracao do conteiner da parte do main header */\n    grid: MH;\n    background-color: ",";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.secundary}),(function(e){return e.theme.colors.gray})),de=(d.c.div(g||(g=Object(l.a)(["\n\n    color: ",";\n\n"])),(function(e){return e.theme.colors.white})),d.c.h3(O||(O=Object(l.a)([""]))),d.c.span(y||(y=Object(l.a)([""]))),function(){var e=j(),n=(e.alterarTheme,e.theme),t=Object(r.useState)((function(){return"dark"===n.title})),a=Object(u.a)(t,2);a[0],a[1];return Object(b.jsx)(ie,{})}),le=t(124),se=t(173),ue=t(172),pe=d.c.div(w||(w=Object(l.a)(["\n    grid-area: AS;\n    \n    background-color: ",";\n    padding-left: 20px;\n    border-right: 1px solid ",";\n\n"])),(function(e){return e.theme.colors.secundary}),(function(e){return e.theme.colors.gray})),he=d.c.header(C||(C=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    height: 70px;\n\n\n"]))),be=(d.c.img(q||(q=Object(l.a)(["\n    height: 40px;\n    width: 30px;\n\n"]))),d.c.h3(F||(F=Object(l.a)(["\n    color: ",";\n    align-items: center;\n    \n"])),(function(e){return e.theme.colors.white}))),fe=d.c.nav(k||(k=Object(l.a)(["\n        display: flex;\n        flex-direction: column;\n        margin-top: 50px;\n\n"]))),xe=d.c.a(S||(S=Object(l.a)(["\n    color: ",";\n    text-decoration: none;\n    \n    margin: 7px 0;\n    display: flex;\n    align-items: center;\n    transition: opacity .3s;\n\n\n    &:hover{\n        opacity: .7;\n\n    }\n\n\n    > svg {\n        font-size: 35px;\n        margin-right: 5px;\n    }\n\n"])),(function(e){return e.theme.colors.corMenu})),je=function(){return Object(b.jsxs)(pe,{children:[Object(b.jsx)(he,{children:Object(b.jsx)(be,{children:"Dashboard ReactJs"})}),Object(b.jsxs)(fe,{children:[Object(b.jsxs)(xe,{href:"/dashboard",children:[Object(b.jsx)(ue.a,{}),"Dashboard"]}),Object(b.jsxs)(xe,{href:"/pag_Show/entrada",children:[Object(b.jsx)(le.a,{}),"Entradas"]}),Object(b.jsxs)(xe,{href:"/pag_Show/saida",children:[Object(b.jsx)(le.b,{}),"Sa\xeddas"]}),Object(b.jsxs)(xe,{href:"#",children:[Object(b.jsx)(se.a,{}),"Sair"]})]})]})},me=d.c.div(D||(D=Object(l.a)(["\n  /**\n  * Estrutura do layouts da pagina */\n    grid-area: CT;\n    color: ",";\n    background-color: ",";\n    padding: 25px;\n    height: calc(100vh - 70px);\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar{\n\n      width: 10px;\n    }\n\n    ::-webkit-scrollbar-thumb{\n      background-color: ",";\n      border-radius: 10px;\n\n    }\n\n\n    ::-webkit-scrollbar-track{\n      background-color: ",";\n\n    }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.secundary}),(function(e){return e.theme.colors.tertiary})),ve=function(e){var n=e.children;return Object(b.jsx)(me,{children:n})},ge=function(e){var n=e.children;return Object(b.jsxs)(ce,{children:[Object(b.jsx)(de,{}),Object(b.jsx)(je,{}),Object(b.jsx)(ve,{children:n})]})},Oe=t(81),ye=d.c.div(E||(E=Object(l.a)([""]))),we=d.c.div(M||(M=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n"]))),Ce=d.c.div(z||(z=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]))),qe=d.c.div(N||(N=Object(l.a)(["\n\n> h1{\n        color:",";\n\n        &::after{\n            content: '';\n            display: block;\n            width: 55px;\n            border-bottom: 10px solid ",";\n            \n        }\n    }\n\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.lineColor})),Fe=d.c.div(P||(P=Object(l.a)(["   \n    display: flex;\n    \n"]))),ke=function(e){var n=e.title,t=e.lineColor,a=e.children;return Object(b.jsxs)(Ce,{children:[Object(b.jsx)(qe,{lineColor:t,children:Object(b.jsx)("h1",{children:n})}),Object(b.jsx)(Fe,{children:a})]})},Se=[{descricao:"Sal\xe1rio",valor:"1300.52",type:"entrada",frequencia:"recorrente",date:"2020-01-10"},{descricao:"Freela",valor:"150.13",type:"entrada",frequencia:"eventual",date:"2020-01-17"},{descricao:"Sal\xe1rio",valor:"2500.23",type:"entrada",frequencia:"recorrente",date:"2020-02-10"},{descricao:"Freela site",valor:"900.23",type:"entrada",frequencia:"eventual",date:"2020-02-21"},{descricao:"Freela app",valor:"950.92",type:"entrada",frequencia:"eventual",date:"2020-02-23"},{descricao:"Sal\xe1rio",valor:"2500.25",type:"entrada",frequencia:"recorrente",date:"2020-03-10"},{descricao:"Sal\xe1rio",valor:"2500.18",type:"entrada",frequencia:"recorrente",date:"2020-04-10"},{descricao:"Sal\xe1rio",valor:"2500.15",type:"entrada",frequencia:"recorrente",date:"2020-05-10"},{descricao:"Sal\xe1rio",valor:"2500.12",type:"entrada",frequencia:"recorrente",date:"2020-06-10"},{descricao:"Emprestimp",valor:"2500.00",type:"entrada",frequencia:"eventual",date:"2019-08-10"},{descricao:"Sal\xe1rio",valor:"2500.00",type:"entrada",frequencia:"recorrente",date:"2020-07-10"}],De=[{descricao:"Energia el\xe9trica",valor:"150.55",type:"saida",frequencia:"recorrente",date:"2020-01-10"},{descricao:"\xc1gua",valor:"75.55",type:"saida",frequencia:"recorrente",date:"2020-01-15"},{descricao:"Telefone",valor:"99.99",type:"saida",frequencia:"recorrente",date:"2020-01-13"},{descricao:"Plano de Sa\xfade",valor:"300.00",type:"saida",frequencia:"recorrente",date:"2020-01-23"},{descricao:"Compras do m\xeas",valor:"625.78",type:"saida",frequencia:"recorrente",date:"2020-01-23"},{descricao:"Lanche",valor:"45.70",type:"saida",frequencia:"eventual",date:"2020-01-23"},{descricao:"Blusa",valor:"95.70",type:"saida",frequencia:"eventual",date:"2020-01-23"},{descricao:"Energia el\xe9trica",valor:"125.55",type:"saida",frequencia:"recorrente",date:"2020-02-10"},{descricao:"\xc1gua",valor:"90.15",type:"saida",frequencia:"recorrente",date:"2020-02-15"},{descricao:"Telefone",valor:"99.99",type:"saida",frequencia:"recorrente",date:"2020-02-23"},{descricao:"Plano de Sa\xfade",valor:"300.00",type:"saida",frequencia:"recorrente",date:"2020-02-23"},{descricao:"Compras do m\xeas",valor:"540.00",type:"saida",frequencia:"recorrente",date:"2020-02-25"},{descricao:"Parcela do Celular 1/5",valor:"150.99",type:"saida",frequencia:"eventual",date:"2020-02-26"},{descricao:"Cinema",valor:"45.00",type:"saida",frequencia:"eventual",date:"2020-02-23"},{descricao:"Energia el\xe9trica",valor:"97.00",type:"saida",frequencia:"recorrente",date:"2020-03-10"},{descricao:"\xc1gua",valor:"100.10",type:"saida",frequencia:"recorrente",date:"2020-03-15"},{descricao:"Telefone",valor:"99.99",type:"saida",frequencia:"recorrente",date:"2019-03-23"},{descricao:"Plano de Sa\xfade",valor:"300.00",type:"saida",frequencia:"recorrente",date:"2020-03-23"},{descricao:"Compras do m\xeas",valor:"800.50",type:"saida",frequencia:"recorrente",date:"2020-03-17"},{descricao:"Parcela do Celular 2/5",valor:"150.99",type:"saida",frequencia:"eventual",date:"2020-03-18"},{descricao:"Troca de Ol\xe9o do carro",valor:"90.00",type:"saida",frequencia:"eventual",date:"2020-03-23"},{descricao:"Energia el\xe9trica",valor:"75.99",type:"saida",frequencia:"recorrente",date:"2020-04-10"},{descricao:"\xc1gua",valor:"80.33",type:"saida",frequencia:"recorrente",date:"2020-04-15"},{descricao:"Telefone",valor:"99.99",type:"saida",frequencia:"recorrente",date:"2020-04-23"},{descricao:"Plano de Sa\xfade",valor:"300.00",type:"saida",frequencia:"recorrente",date:"2020-04-23"},{descricao:"Compras do m\xeas",valor:"600.00",type:"saida",frequencia:"recorrente",date:"2020-04-25"},{descricao:"Parcela do Celular 3/5",valor:"150.99",type:"saida",frequencia:"eventual",date:"2020-04-26"},{descricao:"Ebook de React Js",valor:"85.95",type:"saida",frequencia:"eventual",date:"2020-04-13"},{descricao:"Energia el\xe9trica",valor:"125.55",type:"saida",frequencia:"recorrente",date:"2020-05-10"},{descricao:"\xc1gua",valor:"90.15",type:"saida",frequencia:"recorrente",date:"2020-05-15"},{descricao:"Telefone",valor:"99.99",type:"saida",frequencia:"recorrente",date:"2020-05-23"},{descricao:"Plano de Sa\xfade",valor:"300.00",type:"saida",frequencia:"recorrente",date:"2020-05-23"},{descricao:"Compras do m\xeas",valor:"540.00",type:"saida",frequencia:"recorrente",date:"2020-05-25"},{descricao:"Parcela do Celular 4/5",valor:"150.99",type:"saida",frequencia:"eventual",date:"2020-05-26"},{descricao:"Blusa Iron Man",valor:"150.00",type:"saida",frequencia:"eventual",date:"2020-01-23"},{descricao:"Energia el\xe9trica",valor:"200.00",type:"saida",frequencia:"recorrente",date:"2020-06-10"},{descricao:"\xc1gua",valor:"150.00",type:"saida",frequencia:"recorrente",date:"2020-06-15"},{descricao:"Telefone",valor:"99.99",type:"saida",frequencia:"recorrente",date:"2020-06-23"},{descricao:"Plano de Sa\xfade",valor:"300.00",type:"saida",frequencia:"recorrente",date:"2020-06-23"},{descricao:"Compras do m\xeas",valor:"559.15",type:"saida",frequencia:"recorrente",date:"2020-06-25"},{descricao:"Parcela do Celular 5/5",valor:"150.99",type:"saida",frequencia:"eventual",date:"2020-06-26"},{descricao:"Perfume",valor:"250.00",type:"saida",frequencia:"eventual",date:"2020-06-21"},{descricao:"Energia el\xe9trica",valor:"250.00",type:"saida",frequencia:"recorrente",date:"2020-07-10"},{descricao:"\xc1gua",valor:"90.00",type:"saida",frequencia:"recorrente",date:"2020-07-15"},{descricao:"Telefone",valor:"99.99",type:"saida",frequencia:"recorrente",date:"2020-07-23"},{descricao:"Plano de Sa\xfade",valor:"300.00",type:"saida",frequencia:"recorrente",date:"2020-07-23"},{descricao:"Compras do m\xeas",valor:"700.00",type:"saida",frequencia:"recorrente",date:"2020-07-25"},{descricao:"Cafeteira",valor:"250.00",type:"saida",frequencia:"eventual",date:"2020-07-26"},{descricao:"Pizza",valor:"60.00",type:"saida",frequencia:"eventual",date:"2020-07-19"},{descricao:"Pizza",valor:"60.00",type:"saida",frequencia:"eventual",date:"2020-07-19"},{descricao:"Pizza",valor:"60.00",type:"saida",frequencia:"eventual",date:"2020-07-19"},{descricao:"Pizza",valor:"60.00",type:"saida",frequencia:"eventual",date:"2020-08-19"},{descricao:"Pizza",valor:"60.00",type:"saida",frequencia:"eventual",date:"2020-08-19"},{descricao:"Pizza",valor:"60.00",type:"saida",frequencia:"eventual",date:"2020-09-19"},{descricao:"Pizza",valor:"60.00",type:"saida",frequencia:"recorrente",date:"2020-09-19"},{descricao:"Pizza",valor:"60.00",type:"saida",frequencia:"recorrente",date:"2020-09-19"}],Ee=d.c.div(T||(T=Object(l.a)(["\n    > select{\n        padding: 7px 10px;\n        border-radius: 5px;\n\n        margin-left: 7px;\n    }\n\n"]))),Me=function(e){var n=e.options,t=e.onChange,a=e.defaultValue;return Object(b.jsx)(Ee,{children:Object(b.jsx)("select",{onChange:t,defaultValue:a,children:n.map((function(e){return Object(b.jsx)("option",{value:e.value,children:e.label},e.value)}))})})},ze=["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],Ne=t(174),Pe=t.n(Ne),Te=t.p+"static/media/cifrao.d4a9bb64.svg",Be=t.p+"static/media/setaCima.e0895fae.svg",Ve=t.p+"static/media/setaBaixo.7681f6e6.svg",Ye=d.c.div(B||(B=Object(l.a)(["\n    width: 32%;\n    height: 150px;\n    margin: 10px 0;\n    background-color: ",";\n    color: ",";\n\n    border-radius: 7px;\n    padding: 10px 20px;\n\n\n    position: relative;\n    overflow: hidden;\n\n    > img {\n        height: 110%;\n        position: absolute;\n        top: -10px;\n        right: -30px;\n        opacity: 50%;\n\n    }\n\n    > span{\n        font-size: 19px;\n        font-weight: 500;\n    }\n\n    > small{\n        font-size: 12px;\n        position: absolute;\n        bottom: 10px;   \n    }\n\n    @media(max-width: 770px){\n        > span{\n            font-size: 14px;\n\n        }\n        > h1{\n            word-wrap: break-word;\n            font-size: 22px;\n        \n\n            > strong {\n                display: inline-block;\n\n                width: 100%;\n                font-size: 16px;\n            }\n        }\n    }\n\n    @media(max-width: 420px){\n        width: 100%;\n\n        > h1{\n            display: flex;\n                    \n            strong {\n                position: initial;\n                width: auto;\n                font-size: 22px;\n\n            }\n\n            strong:after {\n                position: inline-block;\n                content:'';\n                width: 1px;\n            }\n        }\n\n\n    }\n\n"])),(function(e){return e.color}),(function(e){return e.theme.colors.white})),Re=function(e){var n=e.title,t=e.valor,a=e.avisoLabel,o=e.icon,c=e.color,i=Object(r.useMemo)((function(){switch(o){case"cifrao":return Te;case"setaBaixo":return Ve;case"setaCima":return Be;default:return}}),[o]);return Object(b.jsxs)(Ye,{color:c,children:[Object(b.jsx)("span",{children:n}),Object(b.jsxs)("h1",{children:[Object(b.jsx)("strong",{children:"R$ "}),Object(b.jsx)(Pe.a,{end:t,separator:".",decimal:",",decimals:2})]}),Object(b.jsx)("small",{children:a}),Object(b.jsx)("img",{src:i,alt:n})]})},Je=d.c.div(V||(V=Object(l.a)(["\n    width: 48%;\n    height: 260px;\n\n    background-color: ",";\n    color: ","; \n\n    border-radius: 7px;\n    margin: 10px 0;\n    padding: 30px 20px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n\n    > header img {\n        width: 35px;\n        margin-left: 7px;\n\n    }\n\n    header p {\n        font-size: 18px;\n    }\n\n    @media(max-width:770px){ //adicionando funcao para responsividade layout\n        width: 100%;\n        > header h1 {\n           font-size: 24px;\n\n           img{\n               height: 20px;\n               width: 20px;\n\n           }       \n        }\n\n        > header p, > footer span {\n            font-size: 14px;\n        }\n    }\n\n    @media(max-width:420px){ //\n        width: 100%;\n        height: auto;\n\n        > header p {\n            margin-bottom: 15px;\n        }\n    }\n\n"])),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.white})),Ae=function(e){var n=e.title,t=e.descricao,a=e.footerTex,r=e.icon;return Object(b.jsxs)(Je,{children:[Object(b.jsx)("header",{children:Object(b.jsxs)("h1",{children:[n," ",Object(b.jsx)("img",{src:r,alt:"{title}"})]})}),Object(b.jsx)("p",{children:t}),Object(b.jsx)("footer",{children:Object(b.jsx)("span",{children:a})})]})},Ie=t.p+"static/media/happy.bfffc085.svg",Le=t.p+"static/media/triste.957998fe.svg",Ke=t(349),He=t(357),_e=t(187),We=t(97),Ge=d.c.div(Y||(Y=Object(l.a)(["\n    width: 48%;\n    height: 260px;\n    margin: 10px 0;\n\n    background-color: ",";\n    color: ",";\n    border-radius: 7px;\n    display: flex;\n\n    @media(max-width: 770px){\n        display: flex;\n        width: 100%;\n\n    }\n\n\n"])),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.white})),Qe=d.c.aside(R||(R=Object(l.a)(["\n    padding: 30px 20px;\n    \n    > h2{\n        margin-bottom: 20px;\n    }\n\n    @media(max-width: 1345px){\n        padding: 0 15px 5px;\n        margin: 7px;\n\n        > h2 {\n            margin-top: 15px;\n            margin-bottom: 7px;\n        }\n    }\n\n    @media(max-width: 420px){\n        padding: 15px;\n        margin-bottom: 7px;\n\n    }\n"]))),Xe=d.c.li(J||(J=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 7px;\n    \n    > div {\n        background-color: ",";\n        width: 40px;\n        height: 40px;\n        border-radius: 5px;\n        font-size: 14px;\n        line-height: 40px;\n        text-align: center;\n\n    }\n\n    > span {\n        margin-left: 5px;\n    }\n\n    @media(max-width: 145px){\n        font-size: 14px;\n        margin: 3px 0;\n\n        > div {\n            height: 35px;\n            width: 35px;\n            line-height: 35px;\n        }\n\n        > span {\n            margin-left: 7px;\n\n        }\n\n    }\n"])),(function(e){return e.color})),$e=d.c.ul(A||(A=Object(l.a)(["\n    list-style: none;\n    height: 175px;\n    padding-right: 15px;\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar{\n        width: 10px;\n    }\n\n    ::-webkit-scrollbar-thumb{\n        background-color: ",";\n        border-radius: 10px;\n\n    }\n\n\n    ::-webkit-scrollbar-track{\n        background-color: ",";\n\n    }\n\n    @media(max-width: 1345px){\n        display: flex;\n        flex-direction: column;\n        \n    }\n\n"])),(function(e){return e.theme.colors.secundary}),(function(e){return e.theme.colors.tertiary})),Ue=d.c.main(I||(I=Object(l.a)(["\n    display :flex;\n    flex: 1;\n    justify-content: center;\n\n\n\n    @media(max-width: 1345px){\n        height: 100%;\n    }\n\n"]))),Ze=function(e){var n=e.data;return Object(b.jsxs)(Ge,{children:[Object(b.jsxs)(Qe,{children:[Object(b.jsx)("h2",{children:"Rela\xe7\xe3o"}),Object(b.jsx)($e,{children:n.map((function(e){return Object(b.jsxs)(Xe,{color:e.color,children:[Object(b.jsxs)("div",{children:[e.percent,"%"]}),Object(b.jsx)("span",{children:e.name})]},e.name)}))})]}),Object(b.jsx)(Ue,{children:Object(b.jsx)(Ke.a,{children:Object(b.jsx)(He.a,{children:Object(b.jsx)(_e.a,{data:n,dataKey:"percent",children:n.map((function(e){return Object(b.jsx)(We.a,{fill:e.color},e.name)}))})})})})]})},en=t.p+"static/media/neutral.2b2e10f8.svg",nn=d.c.div(L||(L=Object(l.a)(["\n    width: 48%;\n    min-height: 260px;\n    margin: 10px 0;\n    background-color: ",";\n    color: ",";\n    border-radius: 7px;\n    display: flex;\n\n\n    @media(max-width: 1200px){\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: auto;\n     \n    }\n    \n\n"])),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.white})),tn=(d.c.aside(K||(K=Object(l.a)(["\n    flex: 1;\n\n    padding: 30px 20px;\n\n    > h2 {\n        padding-left: 16px;\n        margin-bottom: 10px\n    }\n\n"]))),d.c.ul(H||(H=Object(l.a)(["\n    list-style: none;\n    height: 175px;\n    padding-right: 15px;\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar{\n        width: 10px;\n    }\n\n    ::-webkit-scrollbar-thumb{\n        background-color: ",";\n        border-radius: 10px;\n\n    }\n\n\n    ::-webkit-scrollbar-track{\n        background-color: ",";\n\n    }\n\n\n    @media(max-width: 1200px){\n        display: flex;\n        height: auto;\n       \n     \n    }\n\n"])),(function(e){return e.theme.colors.secundary}),(function(e){return e.theme.colors.tertiary})),d.c.li(_||(_=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 7px;\n    padding-left: 16px;\n    > div {\n        background-color: ",";\n        width: 40px;\n        height: 40px;\n        border-radius: 5px;\n        font-size: 14px;\n        line-height: 40px;\n\n        text-align: center;\n    \n\n    }\n\n    > span {\n        margin-left: 5px;\n    }\n\n\n\n    @media(max-width: 1200px){\n      \n        > div {\n            width: 30px;\n            height: 30px;\n            font-size: 10px;\n            line-height: 30px;\n\n            \n        }\n     \n    }\n"])),(function(e){return e.color})),d.c.main(W||(W=Object(l.a)(["\n    flex: 1;\n    min-height: 150px;\n    display: flex;\n    justify-content: center;\n    padding-top: 35px;\n\n\n"]))),t(353)),an=t(192),rn=t(84),on=function(e){var n=e.titulo,t=e.data;return Object(b.jsxs)(nn,{children:[Object(b.jsxs)(Qe,{children:[Object(b.jsxs)("h2",{children:[" ",n]}),Object(b.jsx)($e,{children:t.map((function(e){return Object(b.jsxs)(Xe,{color:e.color,children:[Object(b.jsxs)("div",{children:[e.percent,"%"]}),Object(b.jsx)("span",{children:e.name})]},e.name)}))})]}),Object(b.jsx)(Ue,{children:Object(b.jsx)(Ke.a,{children:Object(b.jsxs)(tn.a,{data:t,children:[Object(b.jsx)(an.a,{dataKey:"valor",name:"Valor",children:t.map((function(e){return Object(b.jsx)(We.a,{fill:e.color,cursor:"pointer"},e.name)}))}),Object(b.jsx)(rn.a,{})]})})})]})},cn=d.c.div(G||(G=Object(l.a)(["\n    width: 100%;\n    height: 360px;\n    display: flex;\n    flex-direction: column;\n    background-color: ",";\n    color: ",";\n\n    margin: 10px 0;\n    padding: 30px 20px;\n    border-radius: 7px;\n\n    > h2 {\n        margin-bottom: 20px;\n        padding-left: 16px;\n    }\n  \n"])),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.white})),dn=d.c.div(Q||(Q=Object(l.a)(["\n    flex: 1;\n    //height: 260px;\n\n    \n "]))),ln=d.c.head(X||(X=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n\n  \n    > h2 {\n        margin-bottom: 20px;\n        padding-left: 16px;\n    }\n\n    @media(max-width: 1200px){\n        flex-direction: column;\n\n    }\n"]))),sn=d.c.ul($||($=Object(l.a)(["\n    list-style: none;\n    display: flex;\n    padding-right: 16px;\n\n"]))),un=d.c.li(U||(U=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 7px;\n    margin-left: 16px;\n    \n    > div {\n        background-color: ",";\n        width: 40px;\n        height: 40px;\n        border-radius: 5px;\n        font-size: 14px;\n        line-height: 40px;\n        text-align: center;\n\n    }\n\n    > span {\n        margin-left: 5px;\n    }\n\n    @media(max-width: 1280px){\n        \n        > div {\n            width: 30px;\n            height: 30px;\n        }\n\n    }\n\n"])),(function(e){return e.color})),pn=t(354),hn=t(355),bn=t(99),fn=t(193),xn=function(e){var n=e.data,t=e.lineColorResultadoEntrada,a=e.lineColorResultadoSaida;return Object(b.jsxs)(cn,{children:[Object(b.jsxs)(ln,{children:[Object(b.jsx)("h2",{children:"Hist\xf3rico de Saldo"}),Object(b.jsxs)(sn,{children:[Object(b.jsxs)(un,{color:t,children:[Object(b.jsx)("div",{}),Object(b.jsx)("span",{children:"Entradas"})]}),Object(b.jsxs)(un,{color:a,children:[Object(b.jsx)("div",{}),Object(b.jsx)("span",{children:"Saida"})]})]})]}),Object(b.jsx)(dn,{children:Object(b.jsx)(Ke.a,{children:Object(b.jsxs)(pn.a,{data:n,margin:{top:5,right:20,left:20,bottom:5},children:[Object(b.jsx)(hn.a,{strokeDasharray:"3 3",stroke:"#cecece"}),Object(b.jsx)(bn.a,{dataKey:"mes",stroke:"#cecece"}),Object(b.jsx)(rn.a,{}),Object(b.jsx)(fn.a,{type:"monotone",dataKey:"resultadoEntrada",name:"Entradas",stroke:t,strokeWidth:5,dot:{r:5},activeDot:{r:8}}),Object(b.jsx)(fn.a,{type:"monotone",dataKey:"resultadoSaida",name:"Sa\xeddas",stroke:a,strokeWidth:5,dot:{r:5},activeDot:{r:8}})]})})})]})},jn=function(){var e=Object(r.useState)((new Date).getMonth()+1),n=Object(u.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)((new Date).getFullYear()),c=Object(u.a)(o,2),i=c[0],d=c[1],l=Object(r.useMemo)((function(){var e=[];return[].concat(Object(Oe.a)(De),Object(Oe.a)(Se)).forEach((function(n){var t=new Date(n.date).getFullYear();e.includes(t)||e.push(t)})),e.map((function(e){return{value:e,label:e}}))}),[]),s=Object(r.useMemo)((function(){return ze.map((function(e,n){return{value:n+1,label:e}}))}),[]),p=Object(r.useMemo)((function(){var e=0;return Se.forEach((function(n){var a=new Date(n.date),r=a.getFullYear();if(a.getMonth()+1===t&&r===i)try{e+=Number(n.valor)}catch(o){throw new Error("Invado Valor")}})),e}),[t,i]),h=Object(r.useMemo)((function(){var e=0;return De.forEach((function(n){var a=new Date(n.date),r=a.getFullYear();if(a.getMonth()+1===t&&r===i)try{e+=Number(n.valor)}catch(o){throw new Error("Invado Valor")}})),e}),[t,i]),f=Object(r.useMemo)((function(){return p-h}),[p,h]),x=Object(r.useMemo)((function(){return f<0?{title:"Que triste",descricao:"Gastou muitoo dinheiro filho",footerTex:"Planeje Melhor",icon:Le}:0===p&&0===h?{title:"Ops",descricao:"Nao divida nem sobrou",footerTex:"Toma cuidado!",icon:en}:0===f?{title:"Sua carteira positiva",descricao:"Nao divida nem sobrou",footerTex:"Toma cuidado!",icon:Ie}:{title:"Muito bem!",descricao:"Continue assim",footerTex:"invista",icon:Ie}}),[f,p,h]),j=Object(r.useMemo)((function(){var e=p+h,n=Number((p/e*100).toFixed(1)),t=Number((h/e*100).toFixed(1));return[{name:"Entradas",valor:p,percent:n||0,color:"#0000CD"},{name:"Sa\xeddas",valor:h,percent:t||0,color:"#DC143C"}]}),[p,h]),m=Object(r.useMemo)((function(){return ze.map((function(e,n){var t=0;Se.forEach((function(e){var a=new Date(e.date),r=a.getMonth(),o=a.getFullYear();if(r===n&&o===i)try{t+=Number(e.valor)}catch(c){throw new Error("Valor invalido")}}));var a=0;return De.forEach((function(e){var t=new Date(e.date),r=t.getMonth(),o=t.getFullYear();if(r===n&&o===i)try{a+=Number(e.valor)}catch(c){throw new Error("Valor invalido")}})),{mesNumber:n,mes:ze[n].substr(0,3),resultadoEntrada:t,resultadoSaida:a}})).filter((function(e){var n=(new Date).getMonth(),t=(new Date).getFullYear();return i===t&&e.mesNumber<=n||i<t}))}),[i]),v=Object(r.useMemo)((function(){var e=0,n=0;De.filter((function(e){var n=new Date(e.date),a=n.getFullYear();return n.getMonth()+1===t&&a===i})).forEach((function(t){return"recorrente"===t.frequencia?e+=Number(t.valor):"eventual"===t.frequencia?n+=Number(t.valor):void 0}));var a=e+n,r=Number((e/a*100).toFixed(1)),o=Number((n/a*100).toFixed(1));return[{name:"Recorrente",valor:e,percent:r||0,color:"#0000CD"},{name:"Eventual",valor:n,percent:o||0,color:"#DC143C"}]}),[t,i]),g=Object(r.useMemo)((function(){var e=0,n=0;Se.filter((function(e){var n=new Date(e.date),a=n.getFullYear();return n.getMonth()+1===t&&a===i})).forEach((function(t){return"recorrente"===t.frequencia?e+=Number(t.valor):"eventual"===t.frequencia?n+=Number(t.valor):void 0}));var a=e+n,r=Number((e/a*100).toFixed(1)),o=Number((n/a*100).toFixed(1));return[{name:"Recorrente",valor:e,percent:r||0,color:"#0000CD"},{name:"Eventuais",valor:n,percent:o||0,color:"#DC143C"}]}),[t,i]),O=Object(r.useCallback)((function(e){try{var n=Number(e);a(n)}catch(t){throw new Error("valor invalido de mes")}}),[]),y=Object(r.useCallback)((function(e){try{var n=Number(e);d(n)}catch(t){throw new Error("valor invalido de Ano")}}),[]);return Object(b.jsxs)(ye,{children:[Object(b.jsxs)(ke,{title:"Dashboard",lineColor:"#F7931B",children:[Object(b.jsx)(Me,{options:s,onChange:function(e){return O(e.target.value)},defaultValue:t}),Object(b.jsx)(Me,{options:l,onChange:function(e){return y(e.target.value)},defaultValue:i})]}),Object(b.jsxs)(we,{children:[Object(b.jsx)(Re,{title:"Saldo",valor:f,avisoLabel:"atualizado basrado nas entradas",icon:"cifrao",color:"#3d0936"}),Object(b.jsx)(Re,{title:"Entrada",valor:p,avisoLabel:"atualizado basrado nas entradas",icon:"setaCima",color:"#0000CD"}),Object(b.jsx)(Re,{title:"Sa\xedda",color:"#DC143C",valor:h,avisoLabel:"atualizado basrado nas saidas",icon:"setaBaixo"}),Object(b.jsx)(Ae,{title:x.title,descricao:x.descricao,footerTex:x.footerTex,icon:x.icon}),Object(b.jsx)(Ze,{data:j}),Object(b.jsx)(xn,{data:m,lineColorResultadoEntrada:"#0000CD",lineColorResultadoSaida:"#DC143C"}),Object(b.jsx)(on,{titulo:"Saidas",data:v}),Object(b.jsx)(on,{titulo:"Entradas",data:g})]})]})},mn=d.c.div(Z||(Z=Object(l.a)([""]))),vn=d.c.main(ee||(ee=Object(l.a)([""]))),gn=d.c.div(ne||(ne=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-top: 30px;    \n\n    .tag-filter{\n        font-size: 18px;\n        font-weight: 500;\n        background: none;\n        color: ",";\n        margin: 0 10px;\n        transition: opacity .3s;\n        opacity: .4;\n\n        &:hover{\n            opacity: .7;\n        }\n    }\n        .tag-filter-recurrent::after {\n            content: '';\n            display: block;\n            width: 55px;\n            margin: 0 auto;\n            border-bottom: 10px solid ",";\n        }\n\n\n        .tag-filter-eventual::after {\n            content: '';\n            display: block;\n            width: 55px;\n            margin: 0 auto;\n            border-bottom: 10px solid ",";\n        }\n\n\n       .tag-actived{\n            opacity: 1;\n        }\n \n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.filtroVerde}),(function(e){return e.theme.colors.filtro})),On=d.c.li(te||(te=Object(l.a)(["\n/**configurando minha lista de itens */\n    background-color: ",";\n    list-style:none;\n    border-radius: 10px;\n    margin: 10px 0;\n    padding: 12px 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    transition: all .3s;\n    position: relative;\n\n    &:hover{\n        opacity: .7;\n        transform: translateX(10px);\n    }\n\n    > div {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        padding-left: 10px;\n    }\n\n    > div span{\n        font-size: 20px;\n        font-weight: 500;\n    }\n\n    \n\n\n\n\n"])),(function(e){return e.theme.colors.tertiary})),yn=d.c.div(ae||(ae=Object(l.a)(["\n    width: 13px;\n    height: 60%;\n    background-color:",";\n    position: absolute;\n    left: 0;\n\n\n"])),(function(e){return e.color})),wn=function(e){var n=e.bordaCartao,t=e.title,a=e.subTitle,r=e.valor;return Object(b.jsxs)(On,{children:[Object(b.jsx)(yn,{color:n}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:t}),Object(b.jsx)("small",{children:a})]}),Object(b.jsx)("h3",{children:r})]})},Cn=function(e){return e.toLocaleString("pt-br",{style:"currency",currency:"BRL"})},qn=function(e){var n=new Date(e),t=n.getDate()>9?n.getDate():"0".concat(n.getDate()),a=n.getMonth()+1>9?n.getMonth()+1:"0".concat(n.getMonth()+1),r=n.getFullYear();return"".concat(t,"/").concat(a,"/").concat(r)},Fn=t(194),kn=function(e){var n=e.match,t=Object(r.useState)([]),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)((new Date).getMonth()+1),d=Object(u.a)(i,2),l=d[0],s=d[1],p=Object(r.useState)((new Date).getFullYear()),h=Object(u.a)(p,2),f=h[0],x=h[1],j=Object(r.useState)(["recorrente","eventual"]),m=Object(u.a)(j,2),v=m[0],g=m[1],O=n.params.type,y=Object(r.useMemo)((function(){return"entrada"===O?{title:"Entradas",lineColor:"#0000CD",daata:Se}:{title:"Sa\xeddas",lineColor:"#DC143C",daata:De}}),[O]),w=Object(r.useMemo)((function(){var e=[];return y.daata.forEach((function(n){var t=new Date(n.date).getFullYear();e.includes(t)||e.push(t)})),e.map((function(e){return{value:e,label:e}}))}),[y.daata]),C=Object(r.useMemo)((function(){return ze.map((function(e,n){return{value:n+1,label:e}}))}),[]),q=function(e){if(v.findIndex((function(n){return n===e}))>=0){var n=v.filter((function(n){return n!==e}));g(n)}else g((function(n){return[].concat(Object(Oe.a)(n),[e])}))};return Object(r.useEffect)((function(){var e=y.daata.filter((function(e){var n=new Date(e.date),t=n.getMonth()+1,a=n.getFullYear();return t===l&&a===f&&v.includes(e.frequencia)})).map((function(e){return{id:Object(Fn.uuid)(),descricao:e.descricao,valor:Cn(Number(e.valor)),frequencia:e.frequencia,dataFormat:qn(e.date),tagColor:"recorrente"===e.frequencia?"#0000CD":"#DC143C"}}));c(e)}),[y.daata,l,f,o.length,v]),Object(b.jsxs)(mn,{children:[Object(b.jsxs)(ke,{title:y.title,lineColor:y.lineColor,children:[Object(b.jsx)(Me,{options:C,onChange:function(e){return function(e){try{var n=Number(e);s(n)}catch(t){throw new Error("valor invalido de mes")}}(e.target.value)},defaultValue:l}),Object(b.jsx)(Me,{options:w,onChange:function(e){return function(e){try{var n=Number(e);x(n)}catch(t){throw new Error("valor invalido de Ano")}}(e.target.value)},defaultValue:f})]}),Object(b.jsxs)(gn,{children:[Object(b.jsx)("button",{type:"button",className:"tag-filter tag-filter-recurrent ".concat(v.includes("recorrente")&&"tag-actived"),onClick:function(){return q("recorrente")},children:"Previstos"}),Object(b.jsx)("button",{type:"button",className:"tag-filter tag-filter-eventual ".concat(v.includes("eventual")&&"tag-actived"),onClick:function(){return q("eventual")},children:"N\xe3o Previstos"})]}),Object(b.jsx)(vn,{children:o.map((function(e){return Object(b.jsx)(wn,{bordaCartao:e.tagColor,title:e.descricao,subTitle:e.dataFormat,valor:e.valor},e.id)}))})]})},Sn=function(){return Object(b.jsx)(ge,{children:Object(b.jsxs)(oe.c,{children:[Object(b.jsx)(oe.a,{path:"/dashboard",exact:!0,component:jn}),Object(b.jsx)(oe.a,{path:"/pag_Show/:type",exact:!0,component:kn})]})})},Dn=function(){return Object(b.jsx)(re.a,{children:Object(b.jsx)(Sn,{})})},En=function(){j().theme;return Object(b.jsxs)(d.a,{theme:p,children:[Object(b.jsx)(s,{}),Object(b.jsx)(Dn,{})]})};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(x,{children:Object(b.jsx)(En,{})})}),document.getElementById("root"))}},[[347,1,2]]]);
//# sourceMappingURL=main.856b68a7.chunk.js.map