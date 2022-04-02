export interface NoteCard {
  id?: string;
  title?: string;
  body?: string;
  created_at?: string;
  note_book_id?: string;
  thumbnail_url?: string;
}

export interface NoteBook {
  id?: string;
  title?: string;
}
