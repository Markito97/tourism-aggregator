import { FunctionComponent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FieldsContext } from '../../context/DateContext';
import {
  getNextYearAndMonth,
  getPrevYearAndMonth,
  getThisYearAndThisMonth,
} from '../../utils/dateHelpers/index';
import styles from './DatePicker.module.css';
import withContextHoc from '../../hoc/withContext';
import { useDatePicker } from '../../hooks/useDatePicker';
import { useDatePick } from '../../hooks/useDatePick';
import { DatePickerField } from './DatePickerField';
import { DatePickerHeader } from './DatePickerHeader';
import { useMediaQuery, useTheme } from '@mui/material';
import { getDDMMYYYY } from '../../utils/dateHelpers/getDDMMYYYY';
import { DatePickerControls } from './DatePickerControls';
import { DatePickerForm } from './DatePickerForm';

export interface DatePickerProps {
  disablePreviousDays?: boolean;
  handleValue: any;
}

const DatePicker: FunctionComponent<DatePickerProps> = (props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const [pickedDateUnits] = useDatePick();
  const [isModal, setIsModal] = useState(false);
  const [thisYear, thisMonth] = getThisYearAndThisMonth();
  const [monthsDate, setMonthsDate] = useState([
    {
      year: thisYear,
      month: thisMonth + 1,
    },
    {
      year: thisYear,
      month: thisMonth + 2,
    },
  ]);

  const { refs, datePicker, handlers } = useDatePicker(isModal);

  const isShow = datePicker.isCheckIn || datePicker.isCheckOut;

  useLayoutEffect(() => {
    if (isModal) {
      setMonthsDate([
        {
          year: thisYear,
          month: thisMonth + 1,
        },
      ]);
    } else {
      setMonthsDate([
        {
          year: thisYear,
          month: thisMonth + 1,
        },
        {
          year: thisYear,
          month: thisMonth + 2,
        },
      ]);
    }
  }, [isModal]);

  useEffect(() => {
    if (pickedDateUnits.firstPickedDateUnit) {
      if (props.handleValue) {
        props.handleValue(
          'checkIn',
          getDDMMYYYY(
            pickedDateUnits.firstPickedDateUnit.day,
            pickedDateUnits.firstPickedDateUnit.month,
            pickedDateUnits.firstPickedDateUnit.year,
          ),
        );
      }
    }
    if (pickedDateUnits.secondPickedDateUnit) {
      if (props.handleValue) {
        props.handleValue(
          'checkOut',
          getDDMMYYYY(
            pickedDateUnits.secondPickedDateUnit.day,
            pickedDateUnits.secondPickedDateUnit.month,
            pickedDateUnits.secondPickedDateUnit.year,
          ),
        );
      }
    }
  });

  const handleOpenCheckIn = (): void => {
    if (matches) {
      setIsModal(true);
      handlers.setIsCheckIn(true);
    } else {
      handlers.setIsCheckIn(true);
    }
  };

  const handleOpenCheckOut = (): void => {
    if (matches) {
      setIsModal(true);
      handlers.setIsCheckOut(true);
    } else {
      handlers.setIsCheckOut(true);
    }
  };

  const handleClose = (): void => {
    setIsModal(false);
    handlers.setIsCheckIn(false);
    handlers.setIsCheckOut(false);
  };

  const onClickNextButton = (): void => {
    if (isModal) {
      setMonthsDate(([{ year: prevRightDisplayYear, month: prevRightDisplayMonth }]) => {
        const [nextRightDisplayYear, nextRightDisplayMonth] = getNextYearAndMonth(
          prevRightDisplayYear,
          prevRightDisplayMonth,
        );
        return [{ year: nextRightDisplayYear, month: nextRightDisplayMonth }];
      });
    } else {
      setMonthsDate(([, { year: prevRightDisplayYear, month: prevRightDisplayMonth }]) => {
        const [nextRightDisplayYear, nextRightDisplayMonth] = getNextYearAndMonth(
          prevRightDisplayYear,
          prevRightDisplayMonth,
        );
        return [
          { year: prevRightDisplayYear, month: prevRightDisplayMonth },
          { year: nextRightDisplayYear, month: nextRightDisplayMonth },
        ];
      });
    }
  };

  const onClickPrevButton = () => {
    setMonthsDate(([{ year: prevLeftDisplayYear, month: prevLeftDisplayMonth }]) => {
      const [nextLeftDisplayYear, nextLeftDisplayMonth] = getPrevYearAndMonth(
        prevLeftDisplayYear,
        prevLeftDisplayMonth,
      );
      if (isModal) {
        return [{ year: nextLeftDisplayYear, month: nextLeftDisplayMonth }];
      } else {
        return [
          { year: nextLeftDisplayYear, month: nextLeftDisplayMonth },
          { year: prevLeftDisplayYear, month: prevLeftDisplayMonth },
        ];
      }
    });
  };

  useEffect(() => {
    if (!isModal) return;
    const handleClick = (e: MouseEvent) => {
      if (
        modalRef.current?.contains(e.target as Node) &&
        !refs.pickerRef.current?.contains(e.target as Node)
      ) {
        handleClose();
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <FieldsContext.Provider
      value={{
        isClose: datePicker.isClose,
        isCheckIn: datePicker.isCheckIn,
        isCheckOut: datePicker.isCheckOut,
        isModal: isModal,
      }}
    >
      <div className={styles.datepicker__container}>
        <DatePickerForm
          isMatches={matches}
          onCheckIn={handleOpenCheckIn}
          onCheckOut={handleOpenCheckOut}
          checkInValue={getDDMMYYYY(
            pickedDateUnits?.firstPickedDateUnit?.day,
            pickedDateUnits?.firstPickedDateUnit?.month,
            pickedDateUnits?.firstPickedDateUnit?.year,
          )}
          checkOutValue={getDDMMYYYY(
            pickedDateUnits?.secondPickedDateUnit?.day,
            pickedDateUnits?.secondPickedDateUnit?.month,
            pickedDateUnits?.secondPickedDateUnit?.year,
          )}
          checkInRef={refs.checkinRef}
          checkOutRef={refs.checkoutRef}
        />
        <div ref={modalRef} className={isModal ? styles.modal : ''}>
          {isShow && (
            <div
              ref={refs.pickerRef}
              className={isModal ? styles.modal__content : styles.picker__content}
            >
              <div style={{ position: 'relative' }}>
                <DatePickerHeader
                  isModal={isModal}
                  checkIn={pickedDateUnits.firstPickedDateUnit}
                  checkOut={pickedDateUnits.secondPickedDateUnit}
                  onPrev={onClickPrevButton}
                  onNext={onClickNextButton}
                  className={isModal ? 'header__controls__modal' : 'header__controls'}
                />
              </div>
              <DatePickerField dates={monthsDate} />
              {matches && <DatePickerControls onClose={handleClose} />}
            </div>
          )}
        </div>
      </div>
    </FieldsContext.Provider>
  );
};

export default withContextHoc(DatePicker);
