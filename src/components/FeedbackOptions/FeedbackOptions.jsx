import Box from 'components/Box';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Box justifyContent="center" display="flex">
            {options.map(name => {
                return (
                    <Button
                key = { name }
                name = { name }
                onClick = {onLeaveFeedback}
            >
            {name}
        </Button>
    );
            })}
        </Box>
    );
};