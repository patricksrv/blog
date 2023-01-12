
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://cdn.pixabay.com/photo/2020/03/06/08/00/laptop-4906312_960_720.jpg) center/55% repeat-x #000;
    background-size: cover;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOGCAST</Heading>
            <SubHeading>Share Your Story with the World...</SubHeading>
        </Image>
    )
}

export default Banner;