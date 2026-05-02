import { Card } from '@heroui/react';
import React from 'react';

const Stats = () => {
    return (
        <div>
            <Card className="w-[320px]" variant="default">
                <Card.Header>
                    <Card.Title>Default</Card.Title>
                    <Card.Description>Standard card appearance (bg-surface)</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p>The default card variant for most use cases</p>
                </Card.Content>
            </Card>
        </div>
    );
};

export default Stats;