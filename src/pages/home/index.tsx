import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Button, Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import FormControlAnswers from '../../shared/ui/formControlAnswers';

import { array, IQuestion } from '../../consts';
import { getValue } from '@testing-library/user-event/dist/utils';

import './style.scss';
import SuccessPage from '../../features/successPage';

const Home = () => {
  const [step, setStep] = useState<number>(0);
  const { control, getValues } = useForm();
  const [error, setError] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChangeStep = (index: number) => {
    setStep(index);
  };

  const handleNext = () => {
    const values = getValues();
    const valuesArray: string[] = Object.values(values);
    console.log('==========>values', values);
    if (step === array.length - 1) {
      let result = 0;
      valuesArray.forEach((el) => {
        console.log('==========>el', el);
        if (el.includes('true')) {
          result += 1;
        }
      });

      setIsSuccess(true);
      console.log('==========>result', result);
    } else {
      setStep((prevActiveStep) => prevActiveStep + 1);
      setError(true);
    }
  };

  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1);
    setError(false);
  };

  return (
    <div className="home">
      <div className="wrapper">
        {isSuccess ? (
          <SuccessPage />
        ) : (
          <>
            <Stepper className="stepper" activeStep={step}>
              {array.map((label: IQuestion, index: number) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <Step onClick={() => handleChangeStep(index)} key={index.toString(36)}>
                    <StepLabel className="stepContent">{label.questionName}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div className="form-container">
              <FormControlAnswers
                setError={setError}
                answers={array[step].answers}
                name={array[step].questionName}
                questionQuest={array[step].questionQuest}
                control={control}
                id={step}
              />
            </div>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button variant="contained" disabled={step === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Предыдущий
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Box display="flex" flexDirection="column">
                <Button variant="contained" disabled={error} onClick={handleNext}>
                  {step === array.length - 1 ? 'Отправить' : 'Следующий'}
                </Button>
              </Box>
            </Box>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
