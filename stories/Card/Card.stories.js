import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink,
    CardImgOverlay,
    CardHeader,
    CardFooter,
    CardGroup,
    CardDeck,
    CardColumns,
    Button,
    ListGroup,
    ListGroupItem,
    Nav,
    NavLink
} from "../../src";

import SimpleCard from "./SimpleCard.md";
import SimpleArticle from "./SimpleArticle.md";
import CardIcon from "./CardIcon.md";
import CardShading from "./CardShading.md";
import BigCard from "./BigCard.md";
import BigCardTag from "./BigCardTag.md";
import CardImage from "./CardImage.md";
import SpecialCard from "./SpecialCard.md";

const SimpleCardComponent = () => (
    <div class="row">
  <div class="col-12 col-lg-4">
{/*start card */}
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    {/*end card */}
  </div>
</div>
);

const SimpleArticleComponent = () => (
    <div class="row">
  <div class="col-12 col-lg-6">
    {/*start card */}
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <div class="category-top">
            <a class="category" href="#">Category</a>
            <span class="data">10/12/2018</span>
          </div>
          <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span class="card-signature">di Federico De Paolis</span>
          <a class="read-more" href="#">
            <span class="text">Leggi di più</span>
            {/*Add Icon Later*/}
          </a>
        </div>
      </div>
    </div>
    {/*end card */}
  </div>
</div>
);

const CardIconComponent = () => (
    <div class="row">
  <div class="col-12 col-lg-6">
    {/*Start card */}
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          {/*Add Icon Later*/}
          <a href="#">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          </a>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    {/*end card */}
  </div>
</div>
);

const CardShadingComponent = () => (
    <div class="row">
  <div class="col-12 col-lg-6">
    {/*Start card */}
    <div class="card-wrapper card-space">
      <div class="card card-bg">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a class="read-more" href="#">
            <span class="text">Leggi di più</span>
            {/*Add Icon Later*/}
          </a>
        </div>
      </div>
    </div>
    {/*end card */}
  </div>
</div>
);

const BigCardComponent = () => (
    <div class="row">
  <div class="col-12 col-lg-8">
    {/*Start card */}
    <div class="card-wrapper card-space">
      <div class="card card-bg card-big">
        <div class="card-body">
          <div class="top-icon">
            {/*Add Icon Later*/}
          </div>
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a class="read-more" href="#">
            <span class="text">Leggi di più</span>
            {/*Add Icon Later*/}
          </a>
        </div>
      </div>
    </div>
    {/*end card */}
  </div>
</div>
);
const BigCardTagComponent = () => (
    <div class="row">
  <div class="col-12 col-lg-6">
    {/*Start card */}
    <div class="card-wrapper card-space">
      <div class="card card-bg card-big no-after">
        <div class="card-body">
          <div class="head-tags">
            <a class="card-tag" href="#">Tag</a>
            <span class="data">10/10/2018</span>
          </div>
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="it-card-footer">
            <span class="card-signature">di Federico De Paolis</span>
            <button class="btn btn-outline-primary btn-sm">Action</button>
          </div>
        </div>
      </div>
    </div>
    {/*end card */}
  </div>
</div>
);

const CardImageComponent = () => (
    <div class="row">
  <div class="col-12 col-lg-6">
    {/*Start card */}
    <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper">
              <img src="https://via.placeholder.com/310x190/ebebeb/808080/?text=Immagine" title="img title" alt="imagealt"></img>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p><a class="read-more" href="#"><span class="text">Leggi di più</span>
              {/*Add Icon Later*/}</a>
          </div>
        </div>
      </div>
    {/*end card */}
  </div>
</div>
);

const SpecialCardComponent = () => (
    <div class="row">
  <div class="col-12 col-lg-6">
    {/*Start card */}
    <div class="card-wrapper">
      <a class="card card-img no-after special-card" href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper">
            <img src="https://via.placeholder.com/310x190/ebebeb/808080/?text=Immagine" title="img title" alt="imagealt"></img></div>
          </div>
        </div>
        <div class="card-body">
          <div class="head-tags"><span class="data">10/10/2018</span>
          </div>
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
        </div>
      </a>
    </div>
    {/*end card */}
  </div>
</div>
);

storiesOf("Componenti/Cards", module)
.addDecorator(withA11y)
.add("Simple Card",withDocs(SimpleCard,withInfo({
            propTablesExclude: [Button]
        })(SimpleCardComponent)))
.add("Simple Article", withDocs(SimpleArticle, withInfo()(SimpleArticleComponent)))
.add("Card with icon", withDocs(CardIcon, withInfo()(CardIconComponent)))        
.add("Card with shading",withDocs(CardShading,withInfo({propTablesExclude: [Button]})(CardShadingComponent)))
.add("Big card", withDocs(BigCard, withInfo()(BigCardComponent)))
.add("Big card with tag", withDocs(BigCardTag, withInfo()(BigCardTagComponent)))
.add("Card with image", withDocs(CardImage, withInfo()(CardImageComponent)))   
.add("Special cards", withDocs(SpecialCard, withInfo()(SpecialCardComponent)))
             

    