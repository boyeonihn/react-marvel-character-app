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
        <h2 className="text-4xl font-bold my-5 uppercase">{name}</h2>
        <img
          src={coverImage}
          className="h-full w-1/2 object-contain rounded-t-lg bg-black my-2"
        />
        <p>{description}</p>
        <h3 className="font-bold text-xl">
          Appearances in the Following Series:
        </h3>
        <ul>
          {series.map((item) => (
            <li
              key={item.name}
              className="text-xl list-disc list-inside hover:text-white hover:font-bold"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
export default CharacterDetail;
