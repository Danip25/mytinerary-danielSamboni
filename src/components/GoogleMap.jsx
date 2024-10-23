/* eslint-disable react/prop-types */
const GoogleMap = ({ lat, long }) => {
  const mapSrc = `https://maps.google.com/maps?&hl=es&q=${lat},${long}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

  return (
    <iframe
      src={mapSrc}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
      className="w-full h-full"
    ></iframe>
  );
};

export default GoogleMap;

/*
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2970.1211771435337!2d12.489798076408066!3d41.890250971240555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDUzJzI0LjkiTiAxMsKwMjknMzIuNSJF!5e0!3m2!1ses!2sco!4v1729369896761!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


https://maps.google.com/maps?&hl=es&q=${lat},${long}&t=&z=16&ie=UTF8&iwloc=B&output=embed
*/
