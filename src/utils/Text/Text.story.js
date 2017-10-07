import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import Text from './Text';

const text =
    'Quis et id repellat harum eligendi natus. Animi voluptatem adipisci ea autem possimus laboriosam vitae deleniti voluptas. Optio veritatis in hic non illo. Dolores nam in veniam repellat aut id qui dolor.';

storiesOf('Text', module).add(
    'Text',
    withInfo('Default button')(() => (
        <ul style={{listStyleType: 'none'}}>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">smooth:</small>
                </Text>
                <Text smooth>
                    <p>{text}</p>
                </Text>
            </li>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">clean:</small>
                </Text>
                <Text clean>
                    <p>{text}</p>
                </Text>
            </li>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">weight 400:</small>
                </Text>
                <Text weight={400}>
                    <p>{text}</p>
                </Text>
            </li>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">weight 600:</small>
                </Text>
                <Text weight={600}>
                    <p>{text}</p>
                </Text>
            </li>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">weight 700:</small>
                </Text>
                <Text weight={700}>
                    <p>{text}</p>
                </Text>
            </li>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">normal:</small>
                </Text>
                <Text normal>
                    <p>{text}</p>
                </Text>
            </li>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">secondary:</small>
                </Text>
                <Text secondary>
                    <p>{text}</p>
                </Text>
            </li>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">italic:</small>
                </Text>
                <Text italic>
                    <p>{text}</p>
                </Text>
            </li>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">preformatted:</small>
                </Text>
                <Text preformatted>
                    <p>{text}</p>
                </Text>
            </li>
            <li>
                <Text weight={400}>
                    <small className="u-text-r-xs">clean span:</small> <br />
                </Text>
                <Text clean>{text}</Text>
            </li>
        </ul>
    )),
);
