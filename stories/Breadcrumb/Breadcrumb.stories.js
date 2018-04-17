import React from "react";
import { storiesOf } from "@storybook/react";

import { Breadcrumb, BreadcrumbItem } from "../../src";

const stories = storiesOf("Componenti/Breadcrumb", module);

stories.add("Esempi", () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Library</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  </div>
));
