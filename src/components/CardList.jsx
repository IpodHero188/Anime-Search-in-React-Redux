import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      }
  }));

export default function CardList (props) {
    const classes = useStyles();

        return (
            <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {
                        props.searchResults && props.searchResults.map((result) => (
                        <GridListTile key={result.attributes.posterImage.small}>
                            <img  src={result.attributes.posterImage.small} alt="poster of the anime" />
                        <GridListTileBar 
                            title={result.attributes.canonicalTitle}
                            subtitle={<span>episode count: {result.attributes.episodeCount}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about the anime ${result.attributes.canonicalTitle}`} 
                                    className={classes.icon}>
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                        </GridListTile>
                        ))}
            </GridList>
            </div>
        );

}