import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    makeStyles
  } from '@material-ui/core';
import DataTable from 'react-data-table-component';
import Page from 'src/components/Page';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
    productCard: {
      height: '100%'
    }
}));


const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];

const columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
    },
];

const InventoryList = () => {
    const classes = useStyles();
    const [products] = useState(data);

    return (
        <Page
            className={classes.root}
            title="Inventories"
        >
            <DataTable
                title="Arnold Movies"
                columns={columns}
                data={data}
            />
        </Page>
    );
};

export default InventoryList;