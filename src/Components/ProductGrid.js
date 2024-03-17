import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
const ProductGrid = (props) => {
    const [spacing, setSpacing] = useState(2);
    const [gridData, setGridData] = ([props.data]);
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2} style={{justifyContent: 'center', alignItems: 'center',display:'flex',marginTop:'10px'}}>
        <Grid item xs={8} >
            <Grid container justifyContent="center" spacing={spacing} >
                {gridData.map((value) => (
                    <Grid key={value} item style={styles.gridContainer}>
                        <Paper
                            sx={{
                                height: 140,
                                width: 100,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >
                            <img
                                src={value.image} // Assuming 'image' is the correct property
                                alt={`image-${value.id}`} // Provide alt text for accessibility
                                style={{ height: 140, width: 100 }} // Set height and width
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>
    
    )
}
export default ProductGrid;
const styles={
    gridContainer:{
        backgroundColor:'',
        padding:'20px',
        border:'0.5px solid #C7C8CC',
        borderRadius:'4px',
        margin:'5px'
    }
}