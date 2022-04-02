import { NoteCard } from '../../types/note-card';
import { Card, CardActionArea, CardActions, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { fitStrLength } from '../../shared/functions/stringFormat';

type Props = {
  handleClickNoteCard: (noteCard: NoteCard) => void;
  noteCardList?: NoteCard[];
};

export const NoteCardList = ({ handleClickNoteCard, noteCardList }: Props) => {
  return (
    <>
      {noteCardList?.map((card, index) => (
        <Card
          key={`${card.id}-${card.title}`}
          sx={{ cursor: 'pointer', mt: 0.5 }}
          onClick={(e) => handleClickNoteCard(card)}
        >
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title && fitStrLength(card.title, 20)}
              </Typography>
              <Typography color="text.secondary">
                {card.body && fitStrLength(card.body, 30)}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {card.created_at}
              </Typography>
            </CardActions>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};
