import { Select, Stack, Link, FormLayout, Card, TextStyle, Checkbox, Button } from '@shopify/polaris';
import React, { useCallback, useRef, useState } from 'react';

function ValidationErrorExample() {
    const [weight, setWeight] = useState('12');
    const [unit, setUnit] = useState('');
    const [selected1, setSelected1] = useState('today');
    const options = ['today','yesterday','tomorrow'];
    const handleSelectChange = useCallback((value) => setSelected1(value));
    const handleWeightChange = useCallback((value) => setWeight(value), []);
    const handleUnitChange = useCallback((value) => setUnit(value), []);
    const unitSelectID = 'unit';

    const formGroupMarkup = (
        <Stack vertical spacing="extraTight">
            <FormLayout>
                <FormLayout.Group condensed>
                    <Select 
                         options={['Emerald Silk Gown','Mauve Cashmere Scarf','Cashmere Scarf']}
                        placeholder="Filter By Tittle"
                        value={selected1}
                        onChange={handleSelectChange }
                        autoComplete="off"
                    />
                    <Select
                     options={['$875.00','$230.00','$280.00']}
                        placeholder="Filter By Collection"
                        value={unit}
                        onChange={handleUnitChange}
                    />
                    <Checkbox
                        label="Group Product variant"
                        checked='true'
                    />
                    <Button>search</Button>
                </FormLayout.Group>
            </FormLayout>
        </Stack>
    );

    return <Card sectioned>{formGroupMarkup}</Card>;
} export default ValidationErrorExample