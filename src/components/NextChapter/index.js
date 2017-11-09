const NextChapter = props => (
  <div>
    <h3>
      <a href={props.chapterLink}>{props.chapterText}</a>
    </h3>
  </div>
);

export default NextChapter;
