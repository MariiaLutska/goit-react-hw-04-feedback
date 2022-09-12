import { Box } from '../Box';

export const Notification = ({ message }) => {
    return (
        <Box fontSize="l">
            <h1>{message}</h1>
        </Box>
    );
};