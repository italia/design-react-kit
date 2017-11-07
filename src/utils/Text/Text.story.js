import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import Text from './Text';

const text =
    'Quis et id repellat harum eligendi natus. Animi voluptatem adipisci ea autem possimus laboriosam vitae deleniti voluptas. Optio veritatis in hic non illo. Dolores nam in veniam repellat aut id qui dolor.';

storiesOf('Text', module)
    .add(
        'Default',
        withInfo('Default')(() => (
            <ul style={{listStyleType: 'none'}}>
                <li>
                    <Text weight={400} size="xs">
                        <small>smooth:</small>
                    </Text>
                    <Text smooth>
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>clean:</small>
                    </Text>
                    <Text clean>
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>weight 400:</small>
                    </Text>
                    <Text weight={400}>
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>weight 600:</small>
                    </Text>
                    <Text weight={600}>
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>weight 700:</small>
                    </Text>
                    <Text weight={700}>
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>styleNormal:</small>
                    </Text>
                    <Text styleNormal>
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>secondary:</small>
                    </Text>
                    <Text secondary>
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>styleItalic:</small>
                    </Text>
                    <Text styleItalic>
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>preformatted:</small>
                    </Text>
                    <Text preformatted>
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>clean span:</small> <br />
                    </Text>
                    <Text clean>{text}</Text>
                </li>
            </ul>
        )),
    )
    .add(
        'Size',
        withInfo('Default')(() => (
            <ul style={{listStyleType: 'none'}}>
                <li>
                    <Text weight={400} size="xs">
                        <small>xxl:</small>
                    </Text>
                    <Text size="xxl">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>xl:</small>
                    </Text>
                    <Text size="xl">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>l:</small>
                    </Text>
                    <Text size="l">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>m:</small>
                    </Text>
                    <Text size="m">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>s:</small>
                    </Text>
                    <Text size="s">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>xs:</small>
                    </Text>
                    <Text size="xs">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>xxs:</small>
                    </Text>
                    <Text size="xxs">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>p:</small>
                    </Text>
                    <Text size="p">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>h1:</small>
                    </Text>
                    <Text size="h1">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>h2:</small>
                    </Text>
                    <Text size="h2">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>h3:</small>
                    </Text>
                    <Text size="h3">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>h4:</small>
                    </Text>
                    <Text size="h4">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>h5:</small>
                    </Text>
                    <Text size="h5">
                        <p>{text}</p>
                    </Text>
                </li>
                <li>
                    <Text weight={400} size="xs">
                        <small>h6:</small>
                    </Text>
                    <Text size="h6">
                        <p>{text}</p>
                    </Text>
                </li>
            </ul>
        )),
    );
