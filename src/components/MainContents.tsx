import * as React from 'react';
import { NoteCardContainer } from './note-card/NoteCardContainer';
import { NoteEditContainer } from './note-edit/NoteEditContainer';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { NoteBook, NoteCard } from '../types/note-card';
import { getYyyymmddStr } from '../shared/functions/stringFormat';

type Props = {
  noteBook?: NoteBook;
};

export const MainContents = ({ noteBook }: Props) => {
  // 外部APIデータ用のダミー。本来はここはFastAPIやDjangoなどの処理によって更新される部分
  const [noteCardApiDataList, setNoteCardApiDataList] = useState<NoteCard[]>(
    []
  );
  // ノートブックに紐づくカード一覧
  const [noteCardList, setNoteCardList] = useState<NoteCard[]>([]);

  // 選択中のカード情報
  const [selectedNoteCard, setSelectedNoteCard] = useState<NoteCard>({
    id: '',
  });

  /***
   * カード情報クリック時のハンドラー
   * @param noteCard
   */
  const handleClickNoteCard = (noteCard: NoteCard) => {
    setSelectedNoteCard(noteCard);
  };

  /***
   * カード情報変更時のハンドラー
   * @param changedNoteCard
   */
  const handleChangeNoteCard = (changedNoteCard: NoteCard) => {
    // 変更後の情報をステートに設定
    setSelectedNoteCard(changedNoteCard);
    // フロント側のデータに反映
    setNoteCardList(
      noteCardList.map((noteCard) =>
        noteCard.id === changedNoteCard.id
          ? { ...noteCard, ...changedNoteCard }
          : noteCard
      )
    );
    // API用データに反映(本当はここはaxiosなどで永続化する)
    setNoteCardApiDataList(
      noteCardApiDataList.map((noteCard) =>
        noteCard.id === changedNoteCard.id
          ? { ...noteCard, ...changedNoteCard }
          : noteCard
      )
    );
  };

  useEffect(() => {
    setNoteCardApiDataList([
      {
        id: '1',
        title: 'React useEffect',
        body: 'useEffectに関する記事',
        created_at: getYyyymmddStr(new Date(), '-'),
        note_book_id: '1',
      },
      {
        id: '2',
        title: 'React useLayoutEffect',
        body: 'Reactに関する記事',
        created_at: getYyyymmddStr(new Date(), '-'),
        note_book_id: '1',
      },
      {
        id: '3',
        title: 'SQLAlchemyについて',
        body: 'alembicはrevisionで',
        created_at: getYyyymmddStr(new Date(), '-'),
        note_book_id: '2',
      },
    ]);
  }, []);

  useEffect(() => {
    if (noteBook) {
      const cardList = noteCardApiDataList.filter(
        (card) => card.note_book_id === noteBook.id
      );
      setNoteCardList(cardList);
    }
    // setNoteCardList(noteCardList);
  }, [noteBook]);

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
