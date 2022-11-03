import { Button, Input } from '@mui/material';
import React, { useState } from 'react';

export const App = () => {
    const [itemDescription, setItemDescription] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);
    return (
        <div>
            <Input
                value={itemDescription}
                onChange={(e) => {
                    e.preventDefault();
                    setItemDescription(e.target.value);
                }}
            />
            <Button
                onClick={() => {
                    if (itemDescription !== '') {
                        setItems([...items, itemDescription]);
                        setItemDescription('');
                    }
                }}
            >
                Create
            </Button>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
