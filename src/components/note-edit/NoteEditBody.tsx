import { NoteCard } from '../../types/note-card';
import { Box, TextField } from '@mui/material';

type Props = {
  handleChangeNoteCard: (noteCard: NoteCard) => void;
  selectedNoteCard?: NoteCard;
};
export const NoteEditBody = ({
  handleChangeNoteCard,
  selectedNoteCard,
}: Props) => {
  /***
   * タイトル変更時のハンドラー
   * @param title
   */
  const handleChangeTitle = (title: string) => {
    handleChangeNoteCard({ ...selectedNoteCard, title: title });
  };
  /***
   * 本文変更時のハンドラー
   * @param body
   */
  const handleChangeBody = (body: string) => {
    handleChangeNoteCard({ ...selectedNoteCard, body: body });
  };
  return (
    <>
      <Box sx={{ width: '100%', mt: 4, ml: 2, mr: 2 }}>
        {selectedNoteCard && selectedNoteCard.id !== '' ? (
          <>
            <Box>
              <TextField
                fullWidth
                value={selectedNoteCard?.title}
                onChange={(e) => handleChangeTitle(e.currentTarget.value)}
              />
            </Box>
            <Box sx={{ height: '90vh' }}>
              <TextField
                fullWidth
                multiline={true}
                value={selectedNoteCard?.body}
                onChange={(e) => handleChangeBody(e.currentTarget.value)}
              />
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};
