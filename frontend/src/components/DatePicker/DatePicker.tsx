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
import { TextField } from '../../UI/TextField';
import { useDatePick } from '../../hooks/useDatePick';
import { DatePickerField } from './DatePickerField';
import { DatePickerControls } from './DatePickerControls';
import { DatePickerHeader } from './DatePickerHeader';
import { useMediaQuery, useTheme } from '@mui/material';
import { getDDMMYYYY } from '../../utils/dateHelpers/getDDMMYYYY';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';
import { ChevronRight } from '../../assets/icons/ChevronRight';

export interface DatePickerProps {
  disablePreviousDays?: boolean;
}

const DatePicker: FunctionComponent<DatePickerProps> = (props) => {
  const modalRef = useRef(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const [pickedDateUnits, setPickedDateUnits] = useDatePick();
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
      <div className={styles.container}>
        {matches && (
          <div style={{ display: 'flex', columnGap: '30px', justifyContent: 'space-between' }}>
            <div
              style={{
                border: '1px solid black',
                padding: '16px 32px',
              }}
              onClick={handleOpenCheckIn}
            >
              {!pickedDateUnits.firstPickedDateUnit
                ? 'CheckIn'
                : getDDMMYYYY(
                    pickedDateUnits?.firstPickedDateUnit?.day,
                    pickedDateUnits?.firstPickedDateUnit?.month,
                    pickedDateUnits?.firstPickedDateUnit?.year,
                  )}
            </div>
            <div
              style={{ border: '1px solid black', padding: '16px 32px' }}
              onClick={handleOpenCheckOut}
            >
              {!pickedDateUnits.secondPickedDateUnit
                ? 'CheckOut'
                : getDDMMYYYY(
                    pickedDateUnits?.secondPickedDateUnit?.day,
                    pickedDateUnits?.secondPickedDateUnit?.month,
                    pickedDateUnits?.secondPickedDateUnit?.year,
                  )}
            </div>
          </div>
        )}
        {!matches && (
          <div className={styles.textFields}>
            <TextField
              control={props.control}
              name="checkIn"
              fieldRef={refs.checkinRef}
              onFocus={handleOpenCheckIn}
              placeholder="DD / MM / YYYY"
            />
            <TextField
              control={props.control}
              name="checkOut"
              fieldRef={refs.checkoutRef}
              onFocus={handleOpenCheckOut}
              placeholder="DD / MM / YYYY"
            />
          </div>
        )}

        <div ref={modalRef} className={isModal ? styles.modal : ''}>
          {datePicker.isCheckIn || datePicker.isCheckOut ? (
            <div
              ref={refs.pickerRef}
              className={isModal ? styles.modal__content : styles.picker__content}
            >
              {matches && (
                <DatePickerHeader
                  checkIn={pickedDateUnits.firstPickedDateUnit}
                  checkOut={pickedDateUnits.secondPickedDateUnit}
                  onPrev={onClickPrevButton}
                  onNext={onClickNextButton}
                />
              )}
              {!matches && (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                    }}
                  >
                    <ChevronLeft onClick={onClickPrevButton} />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      right: 0,
                    }}
                  >
                    <ChevronRight onClick={onClickNextButton} />
                  </div>
                </>
              )}

              <DatePickerField dates={monthsDate} />
              <DatePickerControls isModal={isModal} onClose={handleClose} />
            </div>
          ) : null}
        </div>
      </div>
    </FieldsContext.Provider>
  );
};

export default withContextHoc(DatePicker);
