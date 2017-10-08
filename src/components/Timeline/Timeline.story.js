import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Timeline from './Timeline';
import TimelineContent from './TimelineContent';

storiesOf('Timeline', module).add(
    'Default',
    withInfo('Default')(() => (
        <div className="u-padding-all-xxl u-background-grey-15 u-sizeFull">
            <Timeline
                title={<div className="u-textWeight-700">et</div>}
                background="u-background-95"
                color="u-color-white">
                <TimelineContent
                    color="u-color-black"
                    background="u-background-white">
                    <h2 className="u-text-r-xs u-padding-r-bottom">
                        aut dolores exercitationem
                    </h2>
                    <p className="u-text-p u-textSecondary">
                        Quis et id repellat harum eligendi natus. voluptatem
                        adipisci ea autem possimus laboriosam vitae deleniti
                        voluptas. Optio veritatis in hic non illo. Dolores nam
                        in veniam repellat aut id qui dolor.
                    </p>
                </TimelineContent>
            </Timeline>
            <Timeline
                title={<div className="u-textWeight-700">minima</div>}
                background="u-background-95"
                color="u-color-white">
                <TimelineContent
                    color="u-color-black"
                    background="u-background-white">
                    <h2 className="u-text-r-xs u-padding-r-bottom">
                        rerum at labore
                    </h2>
                    <p className="u-text-p u-textSecondary">
                        Est iste sit fuga. Voluptate est et non enim. Culpa est
                        earum amet qui error corporis. Atque alias reiciendis
                        expedita aut similique iste labore maiores maxime. Cum
                        et deserunt nostrum et veritatis omnis molestias.
                    </p>
                </TimelineContent>
            </Timeline>
            <Timeline
                title={<div className="u-textWeight-700">et</div>}
                background="u-background-95"
                color="u-color-white">
                <TimelineContent
                    color="u-color-black"
                    background="u-background-white">
                    <h2 className="u-text-r-xs u-padding-r-bottom">
                        modi nostrum expedita
                    </h2>
                    <p className="u-text-p u-textSecondary">
                        Totam beatae modi. Quam excepturi cumque corporis
                        repudiandae facere incidunt iure accusantium blanditiis.
                        Nihil a pariatur. Ducimus nemo culpa. Et delectus harum
                        est id hic dolores quam voluptas et.
                    </p>
                </TimelineContent>
            </Timeline>
        </div>
    )),
);
