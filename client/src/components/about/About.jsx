
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
     padding: 50 50 0 50;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">BlogCast: Publish Your Passion Your Way</Typography>
                <Text variant="h6"> Hey there stranger! Welcome to Blogcast...</Text>
                <Text variant="h5">Join millions of others...<br />
                    Whether sharing your expertise, breaking news, or whatever is on your mind, you are in good company on Blogcast. 
                    Sign up to discover why millions of people have published their passions here.
                </Text>
                <Text variant="h5">
                    Do you have any questions? Get in touch!<br/>
                    Reach out to us on: 
                    <Box component="span" style={{ marginLeft: 5, marginBottom: -5 }}>
                        <Link href="https://www.instagram.com/itzdeekayofficial/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                    <br />
                    Send Us an Email @ 
                    <Box component="span" style={{ marginLeft: 5, marginBottom: -5 }}>
                    <Link href="mailto:dkpcm1msn@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                    </Box>
                </Text>

                <Text variant="h6" style={{  marginTop: 20 }}> Thanks for visiting my website!</Text>
            </Wrapper>
        </Box>
    )
}

export default About;