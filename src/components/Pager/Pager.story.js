import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Pager from './Pager';
import PagerItem from './PagerItem';
import {findTheReadme} from '../../../.storybook/helpers';

storiesOf('Pager', module)
    .add(
        'Default',
        withInfo('Default')(() => (
            <Pager
                aria-label="Navigazione paginata"
                classNames={{nav: 'u-layout-prose', list: 'u-text-r-xxs'}}>
                <PagerItem className="u-color-50">
                    <span
                        className="Icon-chevron-left u-text-r-m"
                        role="presentation"
                    />
                    <span className="u-hiddenVisually">Pagina precedente</span>
                </PagerItem>
                <PagerItem
                    aria-label="Pagina 1"
                    href="/page-1"
                    className="u-padding-r-all u-color-50">
                    <span className="u-text-r-m">1</span>
                </PagerItem>
                <PagerItem
                    linkable={false}
                    className="u-padding-r-all u-color-50">
                    <span className="u-text-r-m">...</span>
                </PagerItem>
                <PagerItem
                    aria-label="Pagina 12"
                    href="/page-12"
                    className="u-padding-r-all u-background-50 u-color-white">
                    <span className="u-text-r-m">12</span>
                </PagerItem>
                <PagerItem
                    aria-label="Pagina 13"
                    href="/page-13"
                    className="u-padding-r-all u-color-50">
                    <span className="u-text-r-m">13</span>
                </PagerItem>
                <PagerItem
                    aria-label="Pagina 13"
                    href="/page-13"
                    className="u-padding-r-all u-color-50">
                    <span className="u-text-r-m">14</span>
                </PagerItem>
                <PagerItem className="u-color-50">
                    <span
                        className="Icon-chevron-right u-text-r-m"
                        role="presentation"
                    />
                    <span className="u-hiddenVisually">Pagina successiva</span>
                </PagerItem>
            </Pager>
        ))
    )
    .add(
        'Responsive',
        withInfo(findTheReadme('pager') || 'Responsive')(() => (
            <Pager
                aria-label="Navigazione paginata"
                classNames={{nav: 'u-layout-prose', list: 'u-text-r-xxs'}}>
                <PagerItem className="u-color-50">
                    <span
                        className="Icon-chevron-left u-text-r-m"
                        role="presentation"
                    />
                    <span className="u-hiddenVisually">Pagina precedente</span>
                </PagerItem>
                <PagerItem
                    responsive
                    aria-label="Pagina 1"
                    href="/page-1"
                    className="u-padding-r-all u-color-50">
                    <span className="u-text-r-m">1</span>
                </PagerItem>
                <PagerItem
                    responsive
                    linkable={false}
                    className="u-padding-r-all u-color-50">
                    <span className="u-text-r-m">...</span>
                </PagerItem>
                <PagerItem
                    aria-label="Pagina 12"
                    href="/page-12"
                    className="u-padding-r-all u-background-50 u-color-white">
                    <span className="u-text-r-s">
                        <span className="u-md-hidden u-lg-hidden">
                            Pagina
                        </span>{' '}
                        12
                    </span>
                </PagerItem>
                <PagerItem
                    responsive
                    aria-label="Pagina 13"
                    href="/page-13"
                    className="u-padding-r-all u-color-50">
                    <span className="u-text-r-m">13</span>
                </PagerItem>
                <PagerItem
                    responsive
                    aria-label="Pagina 13"
                    href="/page-13"
                    className="u-padding-r-all u-color-50">
                    <span className="u-text-r-m">14</span>
                </PagerItem>
                <PagerItem className="u-color-50">
                    <span
                        className="Icon-chevron-right u-text-r-m"
                        role="presentation"
                    />
                    <span className="u-hiddenVisually">Pagina successiva</span>
                </PagerItem>
            </Pager>
        ))
    );
