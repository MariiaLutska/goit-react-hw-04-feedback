import React, { useState } from 'react';

import {Statistics} from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import {Notification} from './Notification/Notification';

import { Box } from './Box';


export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleClick = type => {
    const target = type.target.name;
    switch(target) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default:
        break;
    }
  };

  // handleClick = name => {
  //   this.setState(state => ({
  //     [name]: state[name] + 1,
  //   }));
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = good + neutral + bad;
    if (total === 0) {
      return 0;
    } else {
      return Math.trunc((good / total) * 100);
    }
  }; 

  // render() {
   return (
     <Box
       display="flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
       border="normal"
       background="lightyellow"
     width="50%">
       <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({good, neutral, bad})}
            onLeaveFeedback={handleClick}
          />
       </Section>
       
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
       </Section>
     </Box>
      
      //  </Box>
        );
}

