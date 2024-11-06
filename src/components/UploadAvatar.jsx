import { useMemo } from 'react';

const UploadAvatar = ({ onChange, value }) => {
  // need that this component upload an avatar with url or seelct defaults 4 avatars
  const options = useMemo(() => {
    return [
      {
        id: 1,
        url: 'https://avatarfiles.alphacoders.com/862/86291.jpg',
      },
      {
        id: 2,
        url: 'https://static1.personality-database.com/profile_images/e46f0e07f1f24318b0d58b0c5a9dc7bb.png',
      },
      {
        id: 3,
        url: 'https://i.redd.it/a0v2ygpnsbib1.jpg',
      },
      {
        id: 4,
        url: 'https://i.pinimg.com/474x/42/02/53/4202535c21e2ced78650f68b79d0959a.jpg',
      },
    ];
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <label
        htmlFor="avatar"
        className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-950"
      >
        <img
          src={
            value ||
            'https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg'
          }
          alt="avatar"
          className="w-full h-full"
        />
      </label>
      {/* create a custom compoennt like a select with 4 defaults avatars */}
      <select
        name="avatar"
        id="avatar"
        className="bg-blue-950 text-white px-4 py-2 rounded-lg"
        onChange={e => onChange(e.target.value)}
        onSelect={e => onChange(e.target.value)}
      >
        <option value="" disabled selected>
          Select an avatar
        </option>
        {options.map(option => (
          <option key={option.id} value={option.url}>
            Avatar {option.id}
          </option>
        ))}
      </select>
      {/* <div className="flex gap-4">
        <input
          type="text"
          id="avatar"
          accept="image/*"
          onChange={e => console.log(e.target.files)}
        />
        <button className="bg-blue-950 text-white px-4 py-2 rounded-lg">
          Upload
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
          Cancel
        </button>
      </div> */}
    </div>
  );
};

export default UploadAvatar;
