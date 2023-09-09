import { Link } from 'react-router-dom';

const CharacterDetail = ({ name, coverImage, description, url, series }) => {
  const detailUrl = url.url;

  return (
    <main className="bg-red-700 p-3">
      <div>
        <a href={detailUrl} target="_blank" className="font-bold block">
          Link to Comics
        </a>
        <Link className="font-bold" to="/">
          {`< Back home`}
        </Link>
      </div>
      <div className="my-3 flex flex-col text-black font-sans">
        <p>{description}</p>
      </div>
    </main>
  );
};
export default CharacterDetail;
