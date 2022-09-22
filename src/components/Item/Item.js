import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Item = ({ data }) => {

	return (
		<div>
			<Card sx={{ maxWidth: 300, margin: 5 }}>
				<CardActionArea >
					<CardMedia component='img' image={data.images} alt='green iguana' sx={{ width: 300 }} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{data.title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default Item;
