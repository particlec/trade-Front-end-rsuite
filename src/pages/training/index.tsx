import Training from "@/pages/training/Training";
import React from 'react';
import {Breadcrumb, Panel} from 'rsuite';

const Page = () => {
    return (
        <Panel
            header={
                <>
                    <h3 className="title">Calendar</h3>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item>training</Breadcrumb.Item>
                    </Breadcrumb>
                </>
            }
        >
            <Training/>
        </Panel>
    );
};

export default Page;