import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import ReactImage from '../bubbletea.png';
import '../styles/OrderCard.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    maxHeight: 120,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 80,
    height: 80,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ComplexGrid(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className="top-padding">
        <Paper className={classes.root}>
        <Grid container spacing={16}>
            <Grid item>
            <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={ReactImage} />
            </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                <Typography gutterBottom variant="subheading">
                    {props.ItemName}
                </Typography>
                <Typography gutterBottom>{props.ItemDescription}</Typography>
                <Button variant="contained" size="medium" color="primary" className={classes.button}>
                    Add To Order
                </Button>
                </Grid>
                <Grid item>
                
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="subheading">$19.00</Typography>
            </Grid>
            </Grid>
        </Grid>
        </Paper>
        </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);