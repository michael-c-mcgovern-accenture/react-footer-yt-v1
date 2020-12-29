import React from 'react';
import Footer from '../components/footer'
import Icons from '../components/footer/icons/index'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      margin: '-20px -12px -12px;',
    },
    accordionMatch: {
        borderBottom: '2px solid black',
        backgroundColor: 'inherit',
        boxShadow: 'none',
    },
  }));

export function FooterContainer() {
    const classes = useStyles();

    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Urgent Contacts</Footer.Title>
                    <Footer.Link href="#">Employee Assistance Counseling: 1-202-323-5244</Footer.Link>
                    <Footer.Link href="#">Equal Employment (EEO) Counseling: 1-202-323-0911</Footer.Link>
                    <Footer.Link href="#">Grief & Critical Incident Support: 1-202-324-5244</Footer.Link>
                    <Footer.Link href="#">Ombudsman: 1-202-324-5152</Footer.Link>
                    <Footer.Link href="#">Sexual Harassment Hotline: 1-202-324-7777</Footer.Link>
                    <Footer.Link href="#">Suicide Prevention Hotline: 1-800-273-8255</Footer.Link>
                    <Footer.Link href="#">Work4Life Program: 1-866-810-6118</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>For Career Development</Footer.Title>
                    <Footer.Link href="#">Leadership Selection</Footer.Link>
                    <Footer.Link href="#">LSA, UEP, and Sabbatical Program</Footer.Link>
                    <Footer.Link href="#">Senior Executive Service</Footer.Link>
                    <Footer.Title>For Travel</Footer.Title>
                    <Footer.Link href="#">FBI Travel Card</Footer.Link>
                    <Footer.Title>For HR Support</Footer.Title>
                    <Footer.Link href="#">FBI Credentials (CREDS)</Footer.Link>
                    <Footer.Link href="#">HR Source Super User Support</Footer.Link>
                    <Footer.Link href="#">HRLink Technical Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>For Hiring</Footer.Title>
                    <Footer.Link href="#">Intelligence Analyst Hiring</Footer.Link>
                    <Footer.Link href="#">Special Agent Hiring</Footer.Link>
                    <Footer.Link href="#">Staffing</Footer.Link>
                    <Footer.Link href="#">Tech and Targeted Recruitment</Footer.Link>
                    <Footer.Link href="#">Transfers and Relocation</Footer.Link>
                    <Footer.Title>For Health & Benefits</Footer.Title>
                    <Footer.Link href="#">Benefits</Footer.Link>
                    <Footer.Link href="#">Health and Medical Programs</Footer.Link>
                    <Footer.Link href="#">Occupational Health</Footer.Link>
                    <Footer.Link href="#">Work Life Program</Footer.Link>
                    <Footer.Link href="#">Workforce Injuries and Claims</Footer.Link>
                </Footer.Column>
                </Footer.Row>
                <Footer.Base><hr/></Footer.Base>
                <Footer.Base>
                    Privacy Policy &nbsp; | &nbsp;
                    Site Map &nbsp; | &nbsp;
                    Org Chart
                </Footer.Base>
            </Footer.Wrapper>
            <Footer.MobileView className={classes.root}>
            <Accordion className={classes.accordionMatch}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.heading}><Footer.Title>Urgent Contacts</Footer.Title></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Footer.Link href="#">Employee Assistance Counseling:<br/> 1-202-323-5244<br/><br/></Footer.Link>
                    <Footer.Link href="#">Equal Employment (EEO) Counseling:<br/> 1-202-323-0911<br/><br/></Footer.Link>
                    <Footer.Link href="#">Grief & Critical Incident Support:<br/> 1-202-324-5244<br/><br/></Footer.Link>
                    <Footer.Link href="#">Ombudsman:<br/> 1-202-324-5152<br/><br/></Footer.Link>
                    <Footer.Link href="#">Sexual Harassment Hotline:<br/> 1-202-324-7777<br/><br/></Footer.Link>
                    <Footer.Link href="#">Suicide Prevention Hotline:<br/> 1-800-273-8255<br/><br/></Footer.Link>
                    <Footer.Link href="#">Work4Life Program:<br/> 1-866-810-6118</Footer.Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordionMatch}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography className={classes.heading}><Footer.Title>For Career Development</Footer.Title></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Footer.Link href="#">Leadership Selection<br/><br/></Footer.Link>
                    <Footer.Link href="#">LSA, UEP, and Sabbatical Program<br/><br/></Footer.Link>
                    <Footer.Link href="#">Senior Executive Service</Footer.Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordionMatch}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography className={classes.heading}><Footer.Title>For Travel</Footer.Title></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Footer.Link href="#">FBI Travel Card</Footer.Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordionMatch}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography className={classes.heading}><Footer.Title>For HR Support</Footer.Title></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Footer.Link href="#">FBI Credentials (CREDS)<br/><br/></Footer.Link>
                    <Footer.Link href="#">HR Source Super User Support<br/><br/></Footer.Link>
                    <Footer.Link href="#">HRLink Technical Support</Footer.Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordionMatch}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography className={classes.heading}><Footer.Title>For Hiring</Footer.Title></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Footer.Link href="#">Intelligence Analyst Hiring<br/><br/></Footer.Link>
                    <Footer.Link href="#">Special Agent Hiring<br/><br/></Footer.Link>
                    <Footer.Link href="#">Staffing<br/><br/></Footer.Link>
                    <Footer.Link href="#">Tech and Targeted Recruitment<br/><br/></Footer.Link>
                    <Footer.Link href="#">Transfers and Relocation</Footer.Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordionMatch}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography className={classes.heading}><Footer.Title>For Health & Benefits</Footer.Title></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Footer.Link href="#">Benefits</Footer.Link>
                    <Footer.Link href="#">Health and Medical Programs<br/><br/></Footer.Link>
                    <Footer.Link href="#">Occupational Health<br/><br/></Footer.Link>
                    <Footer.Link href="#">Work Life Program<br/><br/></Footer.Link>
                    <Footer.Link href="#">Workforce Injuries and Claims</Footer.Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Footer.Base>
                    Privacy Policy &nbsp; | &nbsp;
                    Site Map &nbsp; | &nbsp;
                    Org Chart
                </Footer.Base>
            </Footer.MobileView>
            
        </Footer>
    );
}