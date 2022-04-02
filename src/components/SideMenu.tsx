import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { AppBar } from '../layouts/AppBar';
import { DrawerHeader } from '../layouts/DrawerHeader';
import { Drawer } from '../layouts/Drawer';
import { NoteBook } from '../types/note-card';
import TreeView from '@mui/lab/TreeView';
import { TreeItem } from '@mui/lab';
import { SyntheticEvent } from 'react';

type Props = {
  handleClickSideMenuOpen: () => void;
  handleToggleNoteBookExpand: (e: SyntheticEvent, nodeIds: string[]) => void;
  handleSelectNoteBook: (noteBook: NoteBook) => void;
  isSideMenuOpen: boolean;
  noteBookList: NoteBook[];
  noteBookExpanded: string[];
};

export const SideMenu = ({
  handleClickSideMenuOpen,
  handleToggleNoteBookExpand,
  handleSelectNoteBook,
  isSideMenuOpen,
  noteBookList,
  noteBookExpanded,
}: Props) => {
  const theme = useTheme();

  return (
    <>
      <AppBar position="fixed" open={isSideMenuOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleClickSideMenuOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(isSideMenuOpen && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            React Note
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={isSideMenuOpen}>
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
