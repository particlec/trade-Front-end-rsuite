import React from 'react';
import { Panel, Breadcrumb } from 'rsuite';

const Page = () => {
    return (
        <Panel
            header={
                <>
                    <h3 className="title">Calendar</h3>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item >assessment</Breadcrumb.Item>
                        <Breadcrumb.Item active>nationalDebt</Breadcrumb.Item>
                    </Breadcrumb>
                </>
            }
        >
        </Panel>
    );
};

export default Page;