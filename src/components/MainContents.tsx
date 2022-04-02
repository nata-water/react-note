import * as React from 'react';
import { NoteCardContainer } from './note-card/NoteCardContainer';
import { NoteEditContainer } from './note-edit/NoteEditContainer';
import Box from '@mui/material/Box';
import { NoteCard } from '../types/note-card';

type Props = {
  noteCardList: NoteCard[];
  selectedNoteCard: NoteCard;
  handleChangeNoteCardList: (noteCard: NoteCard) => void;
  handleClickNoteCard: (noteCard: NoteCard) => void;
};

export const MainContents = ({
  noteCardList,
  selectedNoteCard,
  handleChangeNoteCardList,
  handleClickNoteCard,
}: Props) => {
  // カード情報変更時のハンドラー
  const handleChangeNoteCard = (changedNoteCard: NoteCard) => {
    // 変更後の情報をステートに設定
    handleChangeNoteCardList(changedNoteCard);
  };

  return (
    <Box component="main" sx={{ display: 'flex', flexGrow: 1, mt: 5, pt: 1 }}>
      <NoteCardContainer
        handleClickNoteCard={handleClickNoteCard}
        noteCardList={noteCardList}
      />
      <NoteEditContainer
        handleChangeNoteCard={handleChangeNoteCard}
        selectedNoteCard={selectedNoteCard}
      />
    </Box>
  );
};
