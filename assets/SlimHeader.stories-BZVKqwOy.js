import{R as e}from"./index-BFWcBMrj.js";import{H as i,a as E}from"./HeaderContent-Bx0kKk6g.js";import{H as L,a as H}from"./HeaderRightZone-D3hVo12G.js";import{H as T}from"./HeaderLinkZone-DBM6-9vh.js";import{H as b}from"./HeaderToggler-DUfsjSop.js";import{I as w}from"./Icon-Dn2FEDq_.js";import{C as v}from"./Collapse-BQdlK8Xy.js";import{L as o,a as n}from"./LinkListItem-CJpjZu_u.js";import{D as f,a as k}from"./DropdownToggle-BdTyHQJO.js";import{D as h}from"./DropdownMenu-B_Gh5UIE.js";import{R as g,C as I}from"./Col-CzbmXXhQ.js";import{B as D}from"./Button-BvsBu0Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./Container-DxD9c0zF.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./Navbar-DLvLIaZ0.js";import"./NavbarBrand-DSeOht-B.js";import"./NavbarToggler-V5kq2vQO.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./Transition-GxAQdkDD.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DKz4l_X4.js";import"./popper-BAn7w8_p.js";import"./Button-Cn4Lrs6w.js";const ne={title:"Documentazione/Menu di navigazione/Header/Slim",component:i},r={render:({theme:a,isOpen:N,brandText:l})=>e.createElement(i,{type:"slim",theme:a},e.createElement(E,null,e.createElement(L,null,l),e.createElement(T,null,e.createElement(b,{onClick:()=>{}},e.createElement("span",null,l),e.createElement(w,{icon:"it-expand"})),e.createElement(v,{isOpen:N,header:!0},e.createElement(o,null,e.createElement(n,{href:"#"},"Link 1"),e.createElement(n,{href:"#",active:!0},"Link 2 Active")))),e.createElement(H,null,e.createElement(f,{inNavbar:!0},e.createElement(k,{inNavbar:!0,caret:!0},"ITA"),e.createElement(h,null,e.createElement(g,null,e.createElement(I,{size:"12"},e.createElement(o,null,e.createElement(n,{inDropdown:!0,href:"#"},e.createElement("span",null,"ITA")),e.createElement(n,{inDropdown:!0,href:"#"},e.createElement("span",null,"ENG"))))))),e.createElement("div",{className:"it-access-top-wrapper"},e.createElement(D,{color:"primary",size:"sm"},"Accedi"))))),parameters:{docs:{controls:{exclude:["isOpen","className","type","small","testId"]}}},args:{theme:"",isOpen:!1,brandText:"Ente appartenenza/Owner"}},t={render:({theme:a})=>e.createElement(i,{type:"slim",theme:a},e.createElement(E,null,e.createElement(L,{responsive:!0},"Ente appartenenza/Owner"),e.createElement(H,null,e.createElement(f,{inNavbar:!0},e.createElement(k,{inNavbar:!0,caret:!0},"ITA"),e.createElement(h,null,e.createElement(g,null,e.createElement(I,{size:"12"},e.createElement(o,null,e.createElement(n,{inDropdown:!0,href:"#"},e.createElement("span",null,"ITA")),e.createElement(n,{inDropdown:!0,href:"#"},e.createElement("span",null,"ENG"))))))),e.createElement(D,{color:"primary",className:"btn-icon btn-full",href:"#"},e.createElement("span",{className:"rounded-icon"},e.createElement(w,{color:"primary",icon:"it-user"})),e.createElement("span",{className:"d-none d-lg-block"},"Accedi all'area personale")))))};var s,m,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    theme,
    isOpen,
    brandText
  }) => {
    return <Header type="slim" theme={theme}>
                <HeaderContent>
                    <HeaderBrand>{brandText}</HeaderBrand>
                    <HeaderLinkZone>
                        <HeaderToggler onClick={() => {
            /* open logic state here */
          }}>
                            <span>{brandText}</span>
                            <Icon icon="it-expand" />
                        </HeaderToggler>
                        <Collapse isOpen={isOpen} header>
                            <LinkList>
                                <LinkListItem href="#">Link 1</LinkListItem>
                                <LinkListItem href="#" active>
                                    Link 2 Active
                                </LinkListItem>
                            </LinkList>
                        </Collapse>
                    </HeaderLinkZone>
                    <HeaderRightZone>
                        <Dropdown inNavbar>
                            <DropdownToggle inNavbar caret>
                                ITA
                            </DropdownToggle>
                            <DropdownMenu>
                                <Row>
                                    <Col size="12">
                                        <LinkList>
                                            <LinkListItem inDropdown href="#">
                                                <span>ITA</span>
                                            </LinkListItem>
                                            <LinkListItem inDropdown href="#">
                                                <span>ENG</span>
                                            </LinkListItem>
                                        </LinkList>
                                    </Col>
                                </Row>
                            </DropdownMenu>
                        </Dropdown>
                        <div className="it-access-top-wrapper">
                            <Button color="primary" size="sm">
                                Accedi
                            </Button>
                        </div>
                    </HeaderRightZone>
                </HeaderContent>
            </Header>;
  },
  parameters: {
    docs: {
      controls: {
        exclude: ["isOpen", "className", "type", "small", "testId"]
      }
    }
  },
  args: {
    theme: "",
    isOpen: false,
    brandText: "Ente appartenenza/Owner"
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    theme
  }) => {
    return <Header type="slim" theme={theme}>
                <HeaderContent>
                    <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
                    <HeaderRightZone>
                        <Dropdown inNavbar>
                            <DropdownToggle inNavbar caret>
                                ITA
                            </DropdownToggle>
                            <DropdownMenu>
                                <Row>
                                    <Col size="12">
                                        <LinkList>
                                            <LinkListItem inDropdown href="#">
                                                <span>ITA</span>
                                            </LinkListItem>
                                            <LinkListItem inDropdown href="#">
                                                <span>ENG</span>
                                            </LinkListItem>
                                        </LinkList>
                                    </Col>
                                </Row>
                            </DropdownMenu>
                        </Dropdown>
                        <Button color="primary" className="btn-icon btn-full" href="#">
                            <span className="rounded-icon">
                                <Icon color="primary" icon="it-user" />
                            </span>
                            <span className="d-none d-lg-block">Accedi all&#39;area personale</span>
                        </Button>
                    </HeaderRightZone>
                </HeaderContent>
            </Header>;
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const re=["SlimHeader","SlimHeaderFullResponse"];export{r as SlimHeader,t as SlimHeaderFullResponse,re as __namedExportsOrder,ne as default};
