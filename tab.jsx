import { Card,Tabs } from '@shopify/polaris';
import React, { useCallback,useState } from 'react';
import ValidationErrorExample from './menue';
import Table from './middletable';
function TabsWithCustomDisclosureExample() {
   const [selected, setSelected] = useState(0);
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );
  const tabs = [
    {
      id: 'all-customers-4',
      content: 'Gneral Information',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-4',
      label: "hhhh"
    },
    {
      id: 'Additional items',
      content: 'Accepts marketing',
      panelID: 'accepts-marketing-content-4',
    },
    {
      id: 'repeat-customers-4',
      content: 'Target products',
      panelID: 'repeat-customers-content-4',
    },
    {
      id: 'prospects-4',
      content: 'USELL PRODUCTS',
      panelID: 'prospects-content-4',
    },
  ];

  return (
    <Tabs
      options={['Emerald Silk Gown', 'Mauve Cashmere Scarf', 'Cashmere Scarf']}
      tabs={tabs}
      selected={selected}
      onSelect={handleTabChange}
    >
      <Card.Section title={tabs[selected].content}>
        <ValidationErrorExample />
        <Table />
      </Card.Section>
    </Tabs>
  );
} export default TabsWithCustomDisclosureExample