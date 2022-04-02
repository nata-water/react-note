import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import { SideMenu } from './components/SideMenu';
import { MainContents } from './components/MainContents';
import { NoteBook, NoteCard } from './types/note-card';
import { getYyyymmddStr } from './shared/functions/stringFormat';

function App() {
  // 現在オープン中のページ情報
  const [noteBook, setNoteBook] = useState<NoteBook>({});

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

  // ノートブックを選択した時のハンドラー
  const handleSelectNoteBook = (noteBook: NoteBook) => {
    setNoteBook(noteBook);
  };

  // カード情報クリック時のハンドラー
  const handleClickNoteCard = (noteCard: NoteCard) => {
    setSelectedNoteCard(noteCard);
  };

  // カードが変更された時のハンドラー
  const handleChangeNoteCardList = (changedNoteCard: NoteCard) => {
    setSelectedNoteCard(changedNoteCard);
    setNoteCardList(
      noteCardList.map((noteCard) =>
        noteCard.id === changedNoteCard.id
          ? { ...noteCard, ...changedNoteCard }
          : noteCard
      )
    );

    setNoteCardApiDataList(
      noteCardApiDataList.map((noteCard) =>
        noteCard.id === changedNoteCard.id
          ? { ...noteCard, ...changedNoteCard }
          : noteCard
      )
    );
  };

  // 新規ページ作成ボタンクリック時のハンドラー
  const handleClickCreateNewPage = () => {
    let newNoteCardBookId = '1';
    if (noteBook && noteBook.id) {
      newNoteCardBookId = noteBook.id;
    }

    const newNoteCard: NoteCard = {
      id: `${noteCardApiDataList.length + 1}`,
      title: '',
      body: '',
      note_book_id: newNoteCardBookId,
    };

    setNoteCardList([...noteCardList, newNoteCard]);
    setNoteCardApiDataList([...noteCardApiDataList, newNoteCard]);
    setSelectedNoteCard(newNoteCard);
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
    // TODO: ここで、前回開いていたノートブックを設定する
    setNoteBook({ id: '1' });
  }, []);

  useEffect(() => {
    if (noteBook) {
      const cardList = noteCardApiDataList.filter(
        (card) => card.note_book_id === noteBook.id
      );
      setNoteCardList(cardList);
    }
    // setNoteCardList(noteCardList);
  }, [noteBook, noteCardApiDataList]);

  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideMenu
          currentNoteBook={noteBook}
          handleSelectNoteBook={handleSelectNoteBook}
          handleClickCreateNewPage={handleClickCreateNewPage}
        />
        <MainContents
          noteCardList={noteCardList}
          selectedNoteCard={selectedNoteCard}
          handleChangeNoteCardList={handleChangeNoteCardList}
          handleClickNoteCard={handleClickNoteCard}
        />
      </Box>
    </div>
  );
}

export default App;
