import WebFont from 'webfontloader'

WebFont.load({
  custom: {
    families: [
      'Titillium Web:300,400,600,700:latin-ext',
      'Lora:400,700:latin-ext',
      'Roboto Mono:400,700:latin-ext'
    ]
  }
})

export {
  Alert,
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  CardLink,
  CardGroup,
  CardDeck,
  CardColumns,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardImgOverlay,
  Carousel,
  UncontrolledCarousel,
  CarouselControl,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  CardSubtitle,
  CardText,
  CardTitle,
  Popover,
  PopoverBody,
  PopoverHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  PopperContent,
  PopperTargetHelper,
  Tooltip,
  Table,
  ListGroup,
  Form,
  FormFeedback,
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Media,
  PaginationItem as PagerItem,
  PaginationLink as PagerLink,
  TabContent,
  TabPane,
  Jumbotron,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledTooltip,
  Util
} from 'reactstrap'

export { default as Scrollspy } from 'react-scrollspy'

export { default as Accordion } from './components/Accordion/Accordion'
export {
  default as AccordionHeader
} from './components/Accordion/AccordionHeader'
export { default as AccordionBody } from './components/Accordion/AccordionBody'
export { default as Badge } from './components/Badge/Badge'
export { default as Collapse } from './components/Collapse/Collapse'
export { default as FormGroup } from './components/FormGroup/FormGroup'
export { default as Hero } from './components/Hero/Hero'
export { default as Icon } from './components/Icon/Icon'
export { default as Input } from './components/Input/Input'
export { default as LinkList } from './components/LinkList/LinkList'
export { default as LinkListItem } from './components/LinkList/LinkListItem'
export { default as Pager } from './components/Pager/Pager'
export { default as PagerList } from './components/PagerList/PagerList'

export {
  default as PasswordInput
} from './components/PasswordInput/PasswordInput'
export {
  default as PasswordMeter
} from './components/PasswordMeter/PasswordMeter'
export { default as Skiplink } from './components/Skiplink/Skiplink'
export { default as SkiplinkItem } from './components/Skiplink/SkiplinkItem'
export { default as Toggle } from './components/Toggle/Toggle'
export { default as Sidebar } from './components/Sidebar/Sidebar'
export { default as Progress } from './components/Progress/Progress'
export { default as Spinner } from './components/Spinner/Spinner'
export { default as Card } from './components/Card/Card'
export { default as CardCategory } from './components/Card/CardCategory'
export { default as CardTag } from './components/Card/CardTag'
export { default as CardTagsHeader } from './components/Card/CardTagsHeader'
export { default as CardSignature } from './components/Card/CardSignature'
export { default as CardFooterCTA } from './components/Card/CardFooterCTA'
export { default as CardReadMore } from './components/Card/CardReadMore'
export { default as BottomNav } from './components/BottomNav/BottomNav'
export { default as BottomNavItem } from './components/BottomNav/BottomNavItem'
export { default as Chip } from './components/Chips/Chip'
export { default as ChipLabel } from './components/Chips/ChipLabel'
