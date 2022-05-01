import smiley from "./smiley.json";

const Line = ({ emoji }) => {
  return (
    <div className="container">
      {smiley.map((event, index) => {
        return (
          <div key={index} className="bloc">
            {event.keywords.indexOf(emoji) !== -1 && (
              <p>
                {event.symbol} {event.title}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Line;
