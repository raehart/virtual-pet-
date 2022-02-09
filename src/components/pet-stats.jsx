import './pet-stats.css';

function PetStats(props) {
  const stats = {
    hunger: 55,
    boredom: 85,
    fatigue: 20,
    hygiene: 10
  }

  return (
    <div className="pet-stats">

      {Object.keys(stats).map((stat) => {
        return (
          <div key={`stat-${stat}`}   className="pet-stats-meter">
            <label htmlFor={stat}>Pet <span className="pet-stats-name">{stat}</span></label>
            <meter 
              id={stat}
              min="0"
              max="100"
              low="25"
              high="75"
              optimum="85"
              value={ stats[stat] || 1}
            ></meter>
          </div>
        )
      })}
    </div> 
  );
}


export default PetStats;