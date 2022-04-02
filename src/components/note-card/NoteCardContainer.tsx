import { NoteCardList } from './NoteCardList';
import { Stack } from '@mui/material';
import { NoteCard } from '../../types/note-card';

type Props = {
  noteCardList: NoteCard[];
  handleClickNoteCard: (noteCard: NoteCard) => void;
};

export const NoteCardContainer = ({
  handleClickNoteCard,
  noteCardList,
}: Props) => {
  return (
    <>
      <Stack width={500} sx={{ height: '90vh', border: '1px solid #999' }}>
        <NoteCardList
          handleClickNoteCard={handleClickNoteCard}
          noteCardList={noteCardList}
        />
      </Stack>
    </>
  );
};
