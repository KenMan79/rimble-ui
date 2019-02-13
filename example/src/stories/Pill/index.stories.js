import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Pill, Box } from 'rimble-ui'

storiesOf('Pill', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <Box>
      <Box mb={'4'} mx={'auto'}>
        <span style={{display:'inline-block', width:'80px', textAlign:'center'}}>Pill</span>
        <span>Selected Pill</span>
      </Box>
      
      <Pill mr={'2'} mb={'3'}>{'Pending'}</Pill>
      <Pill selected={true} mr={'2'} mb={'3'}>{'Pending'}</Pill>

      <br/>
      <Pill color={'primary'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
      <Pill selected={true} color={'primary'} mr={'2'} mb={'3'}>{'Pending'}</Pill>

      <br/>
      <Pill color={'red'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
      <Pill selected={true} color={'red'} mr={'2'} mb={'3'}>{'Pending'}</Pill>

      <br/>
      <Pill color={'blue'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
      <Pill selected={true} color={'blue'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
    </Box>
  ))