import React, { Dispatch, FC, SetStateAction } from 'react';
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import image from '../../../assets/svg/term.png';

import { IAnswer } from '../../../consts';

import './style.css';

interface IProps {
  answers: IAnswer[];
  name: string;
  questionQuest: string;
  control: any;
  id: number;
  setError: Dispatch<SetStateAction<boolean>>;
}

const FormControlAnswers: FC<IProps> = ({ answers, name, control, id, setError, questionQuest }) => {
  return (
    <FormControl className="everything">
      <div>
        <div className="bod">
          <div className="term">
            <div className="termup">
              <FormLabel>{name}</FormLabel>
              <img src={image} alt="btns-pseudo" />
            </div>
            <div className="inputBox">
              <div className="leftObject">
                <FormLabel className="txt">{questionQuest}</FormLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name={`question${id + 1}`}
                  render={({ field }) => {
                    return (
                      <RadioGroup {...field} onClick={() => setError(false)}>
                        {answers.map((answer) => {
                          return (
                            <FormControlLabel
                              className="txt"
                              color="primary"
                              value={`${answer.name}_${answer.isTrue}`}
                              control={<Radio />}
                              label={answer.name}
                            />
                          );
                        })}
                      </RadioGroup>
                    );
                  }}
                />
              </div>
              {/* <img src="" alt="Pers" className="rightImage" /> */}
            </div>
          </div>
        </div>
      </div>
    </FormControl>
  );
};

export default FormControlAnswers;
