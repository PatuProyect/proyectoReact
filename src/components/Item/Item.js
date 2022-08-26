import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Contador from '../Counter/ItemCount';

const CardUser = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 300, margin: 5 }}>
			<CardActionArea >
				<CardMedia component='img' image={data.image} alt='green iguana' sx={{width: 300}}/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{data.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{data.species}
					</Typography>
				</CardContent>
			</CardActionArea>
			<Contador />
		</Card>
	);
};

export default CardUser;