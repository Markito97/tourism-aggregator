import { HousesField } from '../../components/Houses/HousesField';
import { SearchPanel } from '../../components/Forms/SearchBookingForm';

const Houses = (): JSX.Element => {
  return (
    <>
      <SearchPanel />
      <HousesField />
    </>
  );
};

export default Houses;
