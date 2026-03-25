import type { INodeProperties } from 'n8n-workflow';

const showWhen = {
  operation: ['getAll'],
  resource: ['recording'],
};

export const recordingGetAllDescription: INodeProperties[] = [
  {
    displayName: 'Return All',
    name: 'returnAll',
    type: 'boolean',
    displayOptions: { show: showWhen },
    default: false,
    description: 'Whether to return all recordings (auto-pagination)',
  },
  {
    displayName: 'Limit',
    name: 'limit',
    type: 'number',
    displayOptions: {
      show: { ...showWhen, returnAll: [false] },
    },
    typeOptions: { minValue: 1, maxValue: 25 },
    default: 25,
    description: 'Number of recordings to return (max 25 per page)',
  },
  {
    displayName: 'Filters',
    name: 'filters',
    type: 'collection',
    placeholder: 'Add Filter',
    default: {},
    displayOptions: { show: showWhen },
    options: [
      {
        displayName: 'Recording ID',
        name: 'id',
        type: 'string',
        default: '',
        placeholder: 'ex: abc123',
        description: 'Return only the recording matching this ID. Useful with Noota Trigger.',
      },
      {
        displayName: 'Status',
        name: 'status',
        type: 'options',
        options: [
          { name: 'All', value: 'all' },
          { name: 'Transcribed', value: 'transcribed' },
          { name: 'Uploaded', value: 'uploaded' },
          { name: 'Processing', value: 'processing' },
        ],
        default: 'all',
      },
      {
        displayName: 'Owner Email',
        name: 'email',
        type: 'string',
        default: '',
        placeholder: 'user@example.com',
      },
      {
        displayName: 'Start Date',
        name: 'startDate',
        type: 'number',
        default: 0,
        placeholder: 'Unix timestamp',
      },
      {
        displayName: 'End Date',
        name: 'endDate',
        type: 'number',
        default: 0,
        placeholder: 'Unix timestamp',
      },
    ],
  },
];