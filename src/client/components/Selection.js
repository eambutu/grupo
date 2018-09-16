import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ComplexGrid from './OrderCard';
import '../styles/OrderCard.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding:100,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FormRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={4}>
            <ComplexGrid ItemName="Milk Bubble Tea"
                           ItemDescription="Refreshing, sweet, and chewy!">
            </ComplexGrid>
      </Grid>
      <Grid item xs={4}>
            <ComplexGrid ItemName="Milk Bubble Tea"
                           ItemDescription="Refreshing, sweet, and chewy!">
            </ComplexGrid>
      </Grid>
      <Grid item xs={4}>
            <ComplexGrid ItemName="Milk Bubble Tea"
                           ItemDescription="Refreshing, sweet, and chewy!">
            </ComplexGrid>
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

function NestedGrid(props) {
  const { classes } = props;

  return (
      <div>
          <h1 style={{marginTop:50, marginBottom:-50}}>Kung Fu Tea
      </h1>
      <div className="centerframe">
        <div className={classes.root}>
        <Grid container spacing={8}>
            <Grid item xs={12} container spacing={24}>
            <FormRow classes={classes} />
            </Grid>
            <Grid item xs={12} container spacing={24}>
            <FormRow classes={classes} />
            </Grid>
            <Grid item xs={12} container spacing={24}>
            <FormRow classes={classes} />
            </Grid>
        </Grid>
        </div>
    </div>
    <div>
        <Button style={{marginTop:-150}} variant="outlined" size="large" color="primary" className={classes.button}>
            Submit
        </Button>
    </div>
    </div>
  );
}

NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedGrid);



// <div className="top-padding">
                //     <ComplexSelection ItemName="Milk Bubble Tea"
                //                     ItemDescription="Refreshing, sweet, and chewy!">
                //     </ComplexSelection>
                // </div>