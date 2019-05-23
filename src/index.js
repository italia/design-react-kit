import WebFont from 'webfontloader';

WebFont.load({
  custom: {
    families: [
      'Titillium Web:300,400,600,700:latin-ext',
      'Lora:400,700:latin-ext',
      'Roboto Mono:400,700:latin-ext',
    ],
  },
});

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
  Card,
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
  Progress,
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
  Util,
} from 'reactstrap';

export { default as Scrollspy } from 'react-scrollspy';

export { default as Accordion } from './components/Accordion/Accordion';
export {
  default as AccordionHeader,
} from './components/Accordion/AccordionHeader';
export { default as AccordionBody } from './components/Accordion/AccordionBody';
export {
  default as Autocomplete,
} from './components/Autocomplete/Autocomplete';
export { default as Badge } from './components/Badge/Badge';
export { default as Collapse } from './components/Collapse/Collapse';
export { default as FormGroup } from './components/FormGroup/FormGroup';
export { default as Hero } from './components/Hero/Hero';
export { default as Input } from './components/Input/Input';
export { default as LinkList } from './components/LinkList/LinkList';
export { default as LinkListItem } from './components/LinkList/LinkListItem';
export { default as Offcanvas } from './components/Offcanvas/Offcanvas';
export { default as Pager } from './components/Pager/Pager';
export { default as PagerList } from './components/PagerList/PagerList';

export {
  default as PasswordInput,
} from './components/PasswordInput/PasswordInput';
export {
  default as PasswordMeter,
} from './components/PasswordMeter/PasswordMeter';
export { default as Select } from './components/Select/Select';
export { default as Skiplink } from './components/Skiplink/Skiplink';
export { default as SkiplinkItem } from './components/Skiplink/SkiplinkItem';
export { default as Toggle } from './components/Toggle/Toggle';
