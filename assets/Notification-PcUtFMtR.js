import{j as i}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as t}from"./index-BtoTqJlz.js";import{M as r,d as n,A as a,C as c}from"./index-DQ1boyZV.js";import{N as l,E as d,a as p,b as m,c as h,_ as u,d as f,D as x,S as j,e as g,f as z,F as v}from"./Notification.stories-CJFH9Wgz.js";import{C as N,a as b}from"./CalloutText-C98nfp7D.js";import{C as M}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./Button-BvsBu0Bj.js";import"./index-Bl6ORisp.js";import"./Button-Cn4Lrs6w.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./Icon-Dn2FEDq_.js";function s(o){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:l}),`
`,i.jsx(e.h1,{id:"notifiche",children:"Notifiche"}),`
`,i.jsx(e.h2,{id:"utilizzo",children:"Utilizzo"}),`
`,i.jsxs(e.p,{children:["Per utilizzare le notifiche all'interno della propria applicazione sono necessari due elementi del kit React: ",i.jsx(e.code,{children:"NotificationManager"})," e la funzione ",i.jsx(e.code,{children:"notify"}),"."]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.code,{children:"NotificationManager"}),` è il "contenitore" delle notifiche generate e gestisce l'intero ciclo di vita di ciascuna notifica. È necessario almeno un `,i.jsx(e.code,{children:"NotificationManager"})," per poter mostrare le notifiche all'interno della vostra applicazione."]}),`
`,i.jsxs(e.p,{children:["Per lanciare una notifica invece necessario invocare la funzione ",i.jsx(e.code,{children:"notify"})," che accetta due argomenti obbligatori: titolo e messaggio."]}),`
`,i.jsx(e.p,{children:"L'implementazione più minimale è la seguente:"}),`
`,i.jsx(n,{of:d}),`
`,i.jsx(e.p,{children:"Il messaggio può essere anche un componente React, come nel seguente esempio:"}),`
`,i.jsx(n,{of:p}),`
`,i.jsxs(e.p,{children:["La durata di default di una notifica è 6 secondi (",i.jsx(e.code,{children:"6000 ms"}),"), ma questa può essere cambiata tramite il parametro ",i.jsx(e.code,{children:"duration"}),". Per rimuovere la chiusura automatica della notifica impostare il valore ",i.jsx(e.code,{children:"duration=0"}),": in questo modo la notifica potrà essere chiusa solamente da un'azione dell'utente o da una chiamata programmatica di ",i.jsx(e.code,{children:"notify.dismiss()"}),"."]}),`
`,i.jsx(e.h3,{id:"notificationmanager",children:"NotificationManager"}),`
`,i.jsxs(e.p,{children:["È necessario almeno un ",i.jsx(e.code,{children:"NotificationManager"}),` per mostrare le notifiche: nella maggior parte dei casi avere un unico manager è sufficiente.\r
Qualora fosse necessario avere più `,i.jsx(e.code,{children:"NotificationManager"}),", ad esempio nel caso in cui si carichino più app ciascuna con il suo manager, sarà necessario specificare il parametro ",i.jsx(e.code,{children:"containerId"})," nel componente ",i.jsx(e.code,{children:"NotificationManager"}),", oltre che passare lo stesso parametro nelle opzioni della funzione ",i.jsx(e.code,{children:"notify"}),"."]}),`
`,i.jsx(a,{of:m}),`
`,i.jsx(e.h3,{id:"notify",children:"notify"}),`
`,i.jsxs(e.p,{children:["La funzione ",i.jsx(e.code,{children:"notify"})," ha la seguente firma:"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{children:`notify(title, message?, options?);
`})}),`
`,i.jsx(e.h3,{id:"notificationoptions",children:"NotificationOptions"}),`
`,i.jsxs(e.p,{children:["Il dettaglio del tipo ",i.jsx(e.code,{children:"NotificationOptions"})," è riportato di seguito:"]}),`
`,i.jsx(a,{of:h}),`
`,i.jsx(e.h1,{id:"stile-notifiche",children:"Stile notifiche"}),`
`,i.jsx(e.h2,{id:"per-attirare-lattenzione-su-brevi-messaggi-di-stato",children:"Per attirare l’attenzione su brevi messaggi di stato"}),`
`,i.jsx("div",{className:"docs",children:i.jsxs(N,{color:"warning",children:[i.jsx(M,{children:i.jsx("span",{className:"text",children:"Componente statico per la documentazione"})}),i.jsx(b,{children:i.jsxs(e.p,{children:["Di seguito verrà utilizzato un componente ",i.jsx(c,{children:"NotificationDoc"}),`, di tipo statico, creato appositamente per\r
lo scopo di questa documentazione e `,i.jsx("strong",{children:"che non deve essere utilizzato"}),` nel codice ai fini di\r
produzione.`]})})]})}),`
`,i.jsx(e.p,{children:"La notifica viene utilizzata per portare l’attenzione dell’utente su un messaggio o un cambiamento di stato. Es: la ricezione di una nuova email."}),`
`,i.jsx(e.p,{children:"Lo stato naturale dell’elemento è invisibile. Gli esempi di questa pagina sono stati resi statici per facilitare un confronto fra le varie tipologie di design."}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(e.h3,{id:"notification-con-messaggio",children:"Notification con messaggio"}),`
`,i.jsxs(e.p,{children:["Si può aggiungere un breve testo al di sotto del titolo, questo verrà inserito in un tag ",i.jsx(e.code,{children:"<p/>"}),`.\r
È possibile anche passare contenuti JSX come messaggio qualora necessario.`]}),`
`,i.jsx(n,{of:f}),`
`,i.jsx(e.h3,{id:"dismissable",children:"Dismissable"}),`
`,i.jsx(e.p,{children:"Le Notification Dismissable non vengono nascoste dopo un intervallo di tempo ma vengono chiuse solo quando si clicca sul rispettivo bottone di chiusura."}),`
`,i.jsx(n,{of:x}),`
`,i.jsx(e.h3,{id:"stati",children:"Stati"}),`
`,i.jsxs(e.p,{children:["Alle Notification possono essere stilizzate in modo da determinare lo stato modificando il colore delle icone e del bordo, mediante l'attributo ",i.jsx(e.code,{children:"state"}),":"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:'"success"'})," - per messaggi di procedure andate a buon fine"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:'"error"'})," - per messaggi di errore"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:'"info"'})," - per info generiche"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:'"warning"'})," - per messaggi di precauzione"]}),`
`]}),`
`,i.jsx(n,{of:j}),`
`,i.jsx(e.h3,{id:"posizione-e-arrotondamento-degli-angoli",children:"Posizione e arrotondamento degli angoli"}),`
`,i.jsx(e.p,{children:"La posizione predefinita della Notification è nella parte destra inferiore della finestra."}),`
`,i.jsxs(e.p,{children:["Utilizzando l'attributo ",i.jsx(e.code,{children:"fix"})," con i valori elencati di seguito la Notification verrà posizionata a filo di uno dei margini indicati, modificando l’arrotondamento degli angoli di conseguenza."]}),`
`,i.jsx(e.p,{children:i.jsx(e.em,{children:"N.B. queste classi non influenzano il posizionamento su device mobile, in questo caso la Notification è sempre a piede della finestra e ne occupa tutta la larghezza"})}),`
`,i.jsx(n,{of:g}),`
`,i.jsx(e.h3,{id:"posizione-predefinita",children:"Posizione predefinita"}),`
`,i.jsx(e.p,{children:"Posizionamento predefinito della Notification."}),`
`,i.jsx(n,{of:z}),`
`,i.jsx(e.h3,{id:"posizione-fissa",children:"Posizione fissa"}),`
`,i.jsx(e.p,{children:"Esempi delle quattro posizioni fisse possibili."}),`
`,i.jsx(n,{of:v})]})}function Q(o={}){const{wrapper:e}={...t(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(s,{...o})}):s(o)}export{Q as default};
