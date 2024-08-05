import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountOverview from './account-overview';

const mockData = {
  supportContact: {
    name: 'Lucas Bandeira',
    email: 'lucas@test.com',
    phone: '+5511984561314'
  },
  salesOverview: {
    successfulUploads: 50,
    uploads: 100,
    linesSaved: 200,
    linesAttempted: 300
  }
};

test('renders account information', () => {
  render(<AccountOverview data={mockData} />);

  expect(screen.getByText('Lucas Bandeira')).toBeInTheDocument();
  expect(screen.getByText('lucas@test.com')).toBeInTheDocument();
  expect(screen.getByText('+5511984561314')).toBeInTheDocument();
});

test('renders sales percentages', () => {
  render(<AccountOverview data={mockData} />);

  const percentageUpdate = (100 * mockData.salesOverview.successfulUploads) / mockData.salesOverview.uploads;
  const percentageLines = (100 * mockData.salesOverview.linesSaved) / mockData.salesOverview.linesAttempted;

  expect(screen.getByText(`${percentageUpdate}`)).toBeInTheDocument();
  expect(screen.getByText(`${percentageLines}`)).toBeInTheDocument();
});
