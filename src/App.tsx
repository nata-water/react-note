import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { SyntheticEvent, useEffect, useState } from 'react';
import { SideMenu } from './components/SideMenu';
import { MainContents } from './components/MainContents';
import { NoteBook } from './types/note-card';

function App() {
  // サイドメニューの開閉状態
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
  // ノートブック一覧
  const [noteBookList, setNoteBookList] = useState<NoteBook[]>([]);
  // ノートブックの展開状態
  const [noteBookExpanded, setNoteBookExpanded] = useState<string[]>(['1']);
  // 現在オープン中のページ情報
  const [noteBook, setNoteBook] = useState<NoteBook>({});

  /***
   * サイドメニュークリック時のハンドラー
   */
  const handleClickSideMenuOpen = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  /***
   * ノートセクションを切り替えた時のハンドラー
   * @param e: {SyntheticEvent}
   * @param nodeIds: {string[]} イベント実行時に展開されたノードID一覧
   */
  const handleToggleNoteBookExpand = (e: SyntheticEvent, nodeIds: string[]) => {
    setNoteBookExpanded(nodeIds);
  };

  /***
   * ノートブックを選択した時のハンドラー
   * @param noteBook
   */
  const handleSelectNoteBook = (noteBook: NoteBook) => {
    setNoteBook(noteBook);
  };

  useEffect(() => {
    const noteBook: NoteBook[] = [
      {
        id: '1',
        title: 'React',
      },
      {
        id: '2',
        title: 'Python',
      },
    ];
    setNoteBookList(noteBook);
  }, []);

  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideMenu
          handleClickSideMenuOpen={handleClickSideMenuOpen}
          handleToggleNoteBookExpand={handleToggleNoteBookExpand}
          handleSelectNoteBook={handleSelectNoteBook}
          isSideMenuOpen={isSideMenuOpen}
          noteBookList={noteBookList}
          noteBookExpanded={noteBookExpanded}
        />
        <MainContents noteBook={noteBook} />
      </Box>
    </div>
  );
}

export default App;
