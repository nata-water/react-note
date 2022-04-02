import { NoteEditToolbar } from './NoteEditToolbar';
import { NoteEditBody } from './NoteEditBody';
import { NoteCard } from '../../types/note-card';

type Props = {
  handleChangeNoteCard: (noteCard: NoteCard) => void;
  selectedNoteCard?: NoteCard;
};

export const NoteEditContainer = ({
  handleChangeNoteCard,
  selectedNoteCard,
}: Props) => {
  return (
    <>
      <NoteEditToolbar />
      <NoteEditBody
        handleChangeNoteCard={handleChangeNoteCard}
        selectedNoteCard={selectedNoteCard}
      />
    </>
  );
};
