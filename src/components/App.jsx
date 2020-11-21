import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(EmojiTerm) {
  return (
    <Entry
      key={EmojiTerm.id}
      emoji={EmojiTerm.emoji}
      name={EmojiTerm.name}
      description={EmojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
