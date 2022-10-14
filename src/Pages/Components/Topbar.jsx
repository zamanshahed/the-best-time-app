import { Button, TextField } from '@mui/material'
import React from 'react'
import Card from '../Card'

function Topbar() {
    return (
        <Card>
            <div className="flex justify-between">
                <div className='flex'>
                    <TextField id="outlined-basic" label="Search for Place" variant="outlined" placeholder='(i.e. Banani..)' size='small' />
                    <div className="pl-5">
                        <Button variant="contained" >Search</Button>
                    </div>
                </div>
                <div className="pl-5">
                    <Button variant="contained" >Add Place</Button>
                </div>
            </div>
        </Card>
    )
}

export default Topbar