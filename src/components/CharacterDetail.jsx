const CharacterDetail = ({ name, coverImage, description }) => {
  return (
    <main>
      <div className="bg-white flex flex-col text-black font-sans">
        <h2 className="text-2xl">{name}</h2>
        <img src={coverImage} />
        <p>{description}</p>
      </div>
    </main>
  );
};
export default CharacterDetail;
