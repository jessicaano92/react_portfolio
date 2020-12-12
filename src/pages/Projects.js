import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import proj3 from '../../src/assets/proj3.png';
import proj2 from '../../src/assets/proj2.png';
import pic3 from '../../src/assets/pic3.png';



const useStyles = makeStyles({
    root: {
      maxWidth: 900,
      margin: "auto",
      textAlign: "center",
    },
  
  });


  export default function Projects() {
    
    const styles = useStyles();
  
  
  
    return (
<>
<h2 className="text-center">Projects</h2>
    <div onClick={() => window.open('https://giftr-registry.herokuapp.com/')}>
      <Card className={styles.root}>
        <CardActionArea>
        <img className='Image' src={proj3} alt='Giftr Registry' />
          <CardContent>
          <Typography gutterBottom variant="h4" component="h5">
              Giftr Registry
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <section className="section"> This application allows users to add gifts to their very own registry! Whether it is for a birthday, wedding, or holiday, Giftr allows the user to save links and images for any website or an affiliated one provided on the site. </section>
            </Typography> 
          </CardContent>
        </CardActionArea>
      </Card>
    </div>

  
    <div onClick={() => window.open('https://dry-scrubland-38194.herokuapp.com/')}>
      <Card className={styles.root}>
        <CardActionArea>
        <img className='Image' src={proj2} alt='Couch Surfers Blog' />
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

     
      </>
    );
  }