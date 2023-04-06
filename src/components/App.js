import "./style.css";
import Heading from "./Heading";
import Footer from "./footer";
import Note from "./note";
import notes from"../notes";

// console.log(notes);
// function createNotes(noteItem){
//  return <Note 
//  key={noteItem.key}
// title={noteItem.title}
// content={noteItem.content}
//  />
// }

export default function App() {
  return (
    <div className="App">
       <Heading />
       {/* <Note 
      title="This is the title"
      content="This is the content"
       /> */}
       {notes.map((noteItem)=>
 <Note 
 key={noteItem.key}
title={noteItem.title}
content={noteItem.content}
 />

)}
       <Footer />
    </div>
  );
}
