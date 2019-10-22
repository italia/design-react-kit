import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import AvatarWithImage from "./AvatarWithImage"
import AvatarWithText from "./AvatarWithText"
import AvatarWithIcon from "./AvatarWithIcon"
import AvatarLink from "./AvatarLink"
import Esempi from '../Cookiebar/docs/example.md'
import AvatarIcon from '../../src/components/Avatar/AvatarIcon';
import AvatarLinkWithTooltip from './AvatarLinkWithTooltip';
import AvatarSmallList from './AvatarSmallList';

storiesOf('Componenti/Avatar',module)
    .addDecorator(withA11y)
    .add(
        'Avatar with image',
        withInfo({
            text: Esempi,
            propTables: [AvatarWithImage,AvatarIcon]
        })
        (()=><AvatarWithImage/>)
    )
    .add(
        'Avatar with text',
        withInfo({
            text: Esempi,
            propTables: [AvatarWithText,AvatarIcon]
        })
        (()=><AvatarWithText/>)
    )
    .add(
        'Avatar with icon',
        withInfo({
            text: Esempi,
            propTables: [AvatarWithIcon,AvatarIcon]
        })
        (()=><AvatarWithIcon/>)
    )
    .add(
        'Avatar link',
        withInfo({
            text: Esempi,
            propTables: [AvatarLink,AvatarIcon]
        })
        (()=><AvatarLink/>)
    )
    .add(
        'Avatar link with Tooltip',
        withInfo({
            text: Esempi,
            propTables: [AvatarLink,AvatarIcon]
        })
        (()=><AvatarLinkWithTooltip/>)
    )

    storiesOf('Componenti/Avatar.Avatar groups.List',module)
    .add(
        'Small List',
        withInfo({
            text: Esempi,
            propTables: [AvatarLink,AvatarIcon]
        })
        (()=><AvatarSmallList/>)
    )
    