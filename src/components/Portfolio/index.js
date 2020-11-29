import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./style.css";
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';



const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
      margin: "auto",
      textAlign: "center",
    },
  
  });


  export default function Portfolio() {
    
    const styles = useStyles();
  
  
  
    return (
<>
  <h2>Portfolio</h2>
    <div onClick={() => window.open('https://dry-scrubland-38194.herokuapp.com/')}>
      <Card className={styles.root}>
        <CardActionArea>
        <img className='Image' src={pic2} alt='Couch Surfers Blog' />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h5">
              Couch Surfers Blog 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <section className="section">This application allows users to sign up, log in, and blog about their favorite restaurants, cities, outdoor and indoor activities! </section>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>

    <div onClick={() => window.open('https://jessicaano92.github.io/meal_matcher_javascript_ajax/')}>
      <Card className={styles.root}>
        <CardActionArea>
        <img className='Image' src={pic3} alt='Meal Matcher' />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h5">
              Meal Matcher
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <section className="section">This application allows users to type in a favorite ingredient and view different recipes. They even have the option to add recipes to their own personal recipe book!</section>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>

      <div onClick={() => window.open(' https://jessicaano92.github.io/weather-dashboard/')}>
      <Card className={styles.root}>
        <CardActionArea>
        <img className='Image' src={pic1} alt='Weather Dashboard' />
          <CardContent>
          <Typography gutterBottom variant="h4" component="h5">
              Weather Dashboard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <section className="section"> This application allows users to type in any city they desire and not only get the current weather data but the 5-day forecast as well! </section>
            </Typography> 
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      </>
    );
  }