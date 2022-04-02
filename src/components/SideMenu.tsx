import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
// import { useTheme } from '@mui/material/styles';
import { AppBar } from '../layouts/AppBar';
import { DrawerHeader } from '../layouts/DrawerHeader';
import { Drawer } from '../layouts/Drawer';
import { NoteBook } from '../types/note-card';
import TreeView from '@mui/lab/TreeView';
import { TreeItem } from '@mui/lab';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Button } from '@mui/material';

type Props = {
  currentNoteBook: NoteBook;
  handleSelectNoteBook: (noteBook: NoteBook) => void;
  handleClickCreateNewPage: () => void;
};

export const SideMenu = ({
  // currentNoteBook,
  handleSelectNoteBook,
  handleClickCreateNewPage,
}: Props) => {
  // const theme = useTheme();

  // ノートブックの一覧状態
  const [noteBookList, setNoteBookList] = useState<NoteBook[]>([]);
  // ノートブックの展開状態
  const [noteBookExpanded, setNoteBookExpanded] = useState<string[]>(['1']);

  /***
   * ノートセクションを切り替えた時のハンドラー
   * @param e: {SyntheticEvent}
   * @param nodeIds: {string[]} イベント実行時に展開されたノードID一覧
   */
  const handleToggleNoteBookExpand = (e: SyntheticEvent, nodeIds: string[]) => {
    setNoteBookExpanded(nodeIds);
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
    <>
      <AppBar position="fixed" open={true}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              marginRight: '36px',
              ...{ display: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            React Note
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={true}>
        <DrawerHeader>
          {/*<IconButton onClick={handleClickSideMenuOpen}>*/}
          {/*  {theme.direction === 'rtl' ? (*/}
          {/*    <ChevronRightIcon />*/}
          {/*  ) : (*/}
          {/*    <ChevronLeftIcon />*/}
          {/*  )}*/}
          {/*</IconButton>*/}
        </DrawerHeader>
        <Divider />
        <Button
          variant="contained"
          color="success"
          onClick={handleClickCreateNewPage}
        >
          新規ページ作成
        </Button>
        {/*labパッケージなのでproductionで利用できるかどうか*/}
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          onNodeToggle={handleToggleNoteBookExpand}
          expanded={noteBookExpanded}
        >
          <TreeItem nodeId="1" label="ノートブック">
            {noteBookList.map((noteBook, index) => (
              <TreeItem
                nodeId={`${index + 2}`}
                label={noteBook.title}
                key={`${noteBook.id}-${noteBook.title}`}
                onClick={(e) => handleSelectNoteBook(noteBook)}
              />
            ))}
          </TreeItem>
        </TreeView>
      </Drawer>
    </>
  );
};
